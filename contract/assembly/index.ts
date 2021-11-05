/*
 * AssemblyScript smart contract for Donations
 *
 * Learn more about writing NEAR smart contracts with AssemblyScript:
 * https://docs.near.org/docs/develop/contracts/as/intro
 *
 */

import { Context, logging, u128, ContractPromiseBatch } from "near-sdk-as";
import { Donation } from "./models/donation";
import { User } from "./models/user";
import {
  donationStorage,
  userStorage,
  followerStorage,
  userAccounts,
} from "./storage";

/**
 * Singleton Smart Contract
 */
@nearBindgen
export class BuyMeNear {
  donations: u32 = 0;

  getTotalDonations(): u32 {
    return this.donations;
  }

  /**
   * Get the list of donations for a user
   * @param accountId - The accountId of the user
   * @returns Returns the list of donations for a user
   */
  getDonations(accountId: string): Donation[] {
    return donationStorage.get(accountId, []) as Donation[];
  }

  getUserAccounts(): string[] {
    return userAccounts.values() || [];
  }

  getUserProfile(accountId: string): User {
    return userStorage.get(accountId) as User;
  }

  getAllUsers(): User[] {
    return this.getUserAccounts().map<User>(
      (accountId: string) => userStorage.get(accountId) as User
    );
  }

  /**
   * Get the list of followers for a user
   * @param accountId - The accountId of the user
   * @returns Returns the list of followers for a user
   */
  getFollowers(accountId: string): string[] {
    return followerStorage.get(accountId, []) as string[];
  }

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
    const user = userStorage.get(accountId, new User(accountId)) as User;
    if (!userAccounts.has(accountId)) {
      userAccounts.add(accountId);
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
      this.donations += 1;
      return donation;
    } else {
      throw new Error(`User ${accountId} does not exist`);
    }
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
}
