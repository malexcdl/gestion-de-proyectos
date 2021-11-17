import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateWithoutProyectosLideradosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutProyectosLideradosInput", {
  isAbstract: true
})
export class UsuarioCreateOrConnectWithoutProyectosLideradosInput {
  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: UsuarioWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectosLideradosInput, {
    nullable: false
  })
  create!: UsuarioCreateWithoutProyectosLideradosInput;
}
