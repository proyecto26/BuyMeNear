/*
 * AssemblyScript smart contract for Donations
 * 
 * Learn more about writing NEAR smart contracts with AssemblyScript:
 * https://docs.near.org/docs/develop/contracts/as/intro
 *
 */

import {
  Context,
  logging,
  u128,
  ContractPromiseBatch,
} from "near-sdk-as";
import { Donation } from "./models/donation";
import { User } from "./models/user";
import { donationStorage, userStorage, followerStorage, userAddresses } from "./storage";

/**
 * Singleton Smart Contract
 */
@nearBindgen
export class BuyMeNear {
  users = []
  donations: u32 = 0;
  /**
   * Update the profile of a user
   * @param firstName - The first name of the user
   * @param lastName - The last name of the user
   * @param shortBio - The short bio of the user
   * @param bio - The bio of the user
   * @param avatarUrl - The avatar url of the user
   */
  updateUserProfile(
    firstName: string,
    lastName: string,
    shortBio: string,
    bio: string,
    avatarUrl: string
  ): User {
    const accountId = Context.sender;
    let user = userStorage.get(accountId) || new User(accountId);
    if (!userAddresses.has(accountId)) {
      userAddresses.add(accountId);
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.shortBio = shortBio;
    user.bio = bio;
    user.imageUrl = avatarUrl;
    userStorage.set(accountId, user);
    logging.log(`Updating user profile for account "${accountId}"`);
    return user;
  }

  getUserProfile(accountId: string): User | null {
    return userStorage.get(accountId);
  }

  /**
   * Send a donation to a user
   * @param accountId - The accountId of the user to donate to
   * @param amount - The amount of the donation
   * 
   */
  sendDonation(accountId: string, amount: u128): Donation {
    const sender = Context.sender;
    const user = userStorage.get(accountId);
    const donation = new Donation(amount, sender);
    if (user) {
      user.balance = u128.add(user.balance, amount);
      userStorage.set(accountId, user);
      const transferDonation = ContractPromiseBatch.create(accountId);
      transferDonation.transfer(amount);
      logging.log(`Transferring ${amount} to ${accountId}`);

      const donations = this.getDonations(accountId);
      donations.push(donation);
      donationStorage.set(accountId, donations);
      logging.log(`Adding donation for account "${accountId}"`);
      return donation;
    } else {
      throw new Error(`User ${accountId} does not exist`);
    }
  }

  /**
   * Get the list of donations for a user
   * @param accountId - The accountId of the user
   * @returns Returns the list of donations for a user
   */
  getDonations(accountId: string): Donation[] {
    return donationStorage.get(accountId) || [];
  }

  /**
   * Add a follower to the list of followers
   * @param accountId - The accountId of the user to follow
   * @param followerId - The accountId of the follower
   */
  addFollower(accountId: string, followerId: string): void {
    const user = userStorage.get(accountId);
    if (user) {
      let followers = followerStorage.get(accountId);
      if (followers) {
        followers.push(followerId);
      } else {
        followers = [followerId];
      }
      followerStorage.set(accountId, followers);
    } else {
      throw new Error(`User ${accountId} does not exist`);
    }
  }

  /**
   * Get the list of followers for a user
   * @param accountId - The accountId of the user
   * @returns Returns the list of followers for a user
   */
  getFollowers(accountId: string): string[] {
    return followerStorage.get(accountId) || [];
  }

  getAllUserAddresses(): string[] {
    return userAddresses.values();
  }

  getAllUsers(): User[] {
    return this.getAllUserAddresses().map((accountId) => userStorage.get(accountId) as User);
  }
}
