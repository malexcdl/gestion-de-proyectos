import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoWhereInput } from "../inputs/ProyectoWhereInput";

@TypeGraphQL.InputType("ProyectoRelationFilter", {
  isAbstract: true
})
export class ProyectoRelationFilter {
  @TypeGraphQL.Field(_type => ProyectoWhereInput, {
    nullable: true
  })
  is?: ProyectoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoWhereInput, {
    nullable: true
  })
  isNot?: ProyectoWhereInput | undefined;
}
