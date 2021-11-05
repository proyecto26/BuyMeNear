import { u128 } from "near-sdk-core";

export type Timestamp = u64;

export type AccountID = string;

export type RefCode = string;

export const FEE = u128.from("200000000000000000000000");