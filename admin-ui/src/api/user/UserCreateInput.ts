import { ListingCreateNestedManyWithoutUsersInput } from "./ListingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  description: string;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingCreateNestedManyWithoutUsersInput;
  password: string;
  price: number;
  roles: InputJsonValue;
  title: string;
  username: string;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
};
