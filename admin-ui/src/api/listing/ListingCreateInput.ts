import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  listingCreatedBy: UserWhereUniqueInput;
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmenities: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};
