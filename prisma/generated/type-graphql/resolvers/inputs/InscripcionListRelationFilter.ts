import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionWhereInput } from "../inputs/InscripcionWhereInput";

@TypeGraphQL.InputType("InscripcionListRelationFilter", {
  isAbstract: true
})
export class InscripcionListRelationFilter {
  @TypeGraphQL.Field(_type => InscripcionWhereInput, {
    nullable: true
  })
  every?: InscripcionWhereInput | undefined;

  @TypeGraphQL.Field(_type => InscripcionWhereInput, {
    nullable: true
  })
  some?: InscripcionWhereInput | undefined;

  @TypeGraphQL.Field(_type => InscripcionWhereInput, {
    nullable: true
  })
  none?: InscripcionWhereInput | undefined;
}
