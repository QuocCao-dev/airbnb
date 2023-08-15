import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { Wishlist } from "../wishlist/Wishlist";

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
  wishlists?: Array<Wishlist>;
};
