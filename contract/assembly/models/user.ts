import { context, u128 } from "near-sdk-as";
import { AccountID, Timestamp } from "../utils";

@nearBindgen
export class User {
  balance: u128;
  firstName: string;
  lastName: string;
  shortBio: string;
  bio: string;
  imageUrl: string;
  createAt: Timestamp;

  constructor(public userId: AccountID) {
    this.createAt = context.blockTimestamp;
    this.balance = u128.Zero;
  }

  getBalance(): u128 {
    return this.balance;
  }
}