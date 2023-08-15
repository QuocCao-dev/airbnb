import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmenities: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
