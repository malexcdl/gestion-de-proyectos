import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceWhereInput } from "../inputs/AvanceWhereInput";

@TypeGraphQL.InputType("AvanceListRelationFilter", {
  isAbstract: true
})
export class AvanceListRelationFilter {
  @TypeGraphQL.Field(_type => AvanceWhereInput, {
    nullable: true
  })
  every?: AvanceWhereInput | undefined;

  @TypeGraphQL.Field(_type => AvanceWhereInput, {
    nullable: true
  })
  some?: AvanceWhereInput | undefined;

  @TypeGraphQL.Field(_type => AvanceWhereInput, {
    nullable: true
  })
  none?: AvanceWhereInput | undefined;
}
