import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateWithoutObjetivosInput } from "../inputs/ProyectoCreateWithoutObjetivosInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutObjetivosInput", {
  isAbstract: true
})
export class ProyectoCreateOrConnectWithoutObjetivosInput {
  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: false
  })
  where!: ProyectoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosInput, {
    nullable: false
  })
  create!: ProyectoCreateWithoutObjetivosInput;
}
