/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ListingCreateInput {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  listingCreatedBy!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  locationData!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  locationType!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  mapData!: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  photos!: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  placeAmenities!: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  placeSpace!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  placeType!: string;
}

export { ListingCreateInput as ListingCreateInput };
