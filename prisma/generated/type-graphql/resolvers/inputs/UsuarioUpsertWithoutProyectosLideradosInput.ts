import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateWithoutProyectosLideradosInput";
import { UsuarioUpdateWithoutProyectosLideradosInput } from "../inputs/UsuarioUpdateWithoutProyectosLideradosInput";

@TypeGraphQL.InputType("UsuarioUpsertWithoutProyectosLideradosInput", {
  isAbstract: true
})
export class UsuarioUpsertWithoutProyectosLideradosInput {
  @TypeGraphQL.Field(_type => UsuarioUpdateWithoutProyectosLideradosInput, {
    nullable: false
  })
  update!: UsuarioUpdateWithoutProyectosLideradosInput;

  @TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectosLideradosInput, {
    nullable: false
  })
  create!: UsuarioCreateWithoutProyectosLideradosInput;
}
