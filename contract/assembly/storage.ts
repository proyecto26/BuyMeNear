import { PersistentMap, PersistentSet } from "near-sdk-as";
import { Donation } from "./models/donation";
import { User } from "./models/user";

/**
 * List of users
 * accountId -> User
 */
export const userStorage = new PersistentMap<string, User>("users");
/**
 * List of donations
 * accountId -> Donation[]
 */
export const donationStorage = new PersistentMap<string, Donation[]>("donations");
/**
 * List of followers
 * accountId -> Set<accountId>
 */
export const followerStorage = new PersistentMap<string, string[]>("followers");
/**
 * List of user accounts
 */
export const userAccounts = new PersistentSet<string>("userAccounts");
