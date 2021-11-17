import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateWithoutInscripcionesInput } from "../inputs/UsuarioCreateWithoutInscripcionesInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutInscripcionesInput", {
  isAbstract: true
})
export class UsuarioCreateOrConnectWithoutInscripcionesInput {
  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: UsuarioWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionesInput, {
    nullable: false
  })
  create!: UsuarioCreateWithoutInscripcionesInput;
}
