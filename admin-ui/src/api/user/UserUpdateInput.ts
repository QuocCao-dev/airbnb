import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  description?: string;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingUpdateManyWithoutUsersInput;
  password?: string;
  price?: number;
  roles?: InputJsonValue;
  title?: string;
  username?: string;
};
