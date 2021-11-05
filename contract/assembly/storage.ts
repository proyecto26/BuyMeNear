import { PersistentMap, PersistentSet } from "near-sdk-as";
import { Donation } from "./models/donation";
import { User } from "./models/user";

// A list of users
export const userStorage = new PersistentMap<string, User>("users");
// A list of donations
export const donationStorage = new PersistentMap<string, Donation[]>("donations");
// A list of followers
export const followerStorage = new PersistentMap<string, string[]>("followers");

export const userAddresses = new PersistentSet<string>("userAddresses");
