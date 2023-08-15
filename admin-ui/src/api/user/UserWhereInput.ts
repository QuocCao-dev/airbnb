import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type UserWhereInput = {
  description?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listings?: ListingListRelationFilter;
  price?: FloatFilter;
  title?: StringFilter;
  username?: StringFilter;
};
