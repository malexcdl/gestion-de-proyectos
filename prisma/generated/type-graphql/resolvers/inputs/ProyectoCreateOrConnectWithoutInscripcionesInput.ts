import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateWithoutInscripcionesInput } from "../inputs/ProyectoCreateWithoutInscripcionesInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutInscripcionesInput", {
  isAbstract: true
})
export class ProyectoCreateOrConnectWithoutInscripcionesInput {
  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: false
  })
  where!: ProyectoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionesInput, {
    nullable: false
  })
  create!: ProyectoCreateWithoutInscripcionesInput;
}
