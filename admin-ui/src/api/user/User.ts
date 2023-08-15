import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  description: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Array<Listing>;
  price: number;
  roles: JsonValue;
  title: string;
  updatedAt: Date;
  username: string;
};
