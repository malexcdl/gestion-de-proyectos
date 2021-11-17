import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateWithoutInscripcionesInput } from "../inputs/UsuarioCreateWithoutInscripcionesInput";
import { UsuarioUpdateWithoutInscripcionesInput } from "../inputs/UsuarioUpdateWithoutInscripcionesInput";

@TypeGraphQL.InputType("UsuarioUpsertWithoutInscripcionesInput", {
  isAbstract: true
})
export class UsuarioUpsertWithoutInscripcionesInput {
  @TypeGraphQL.Field(_type => UsuarioUpdateWithoutInscripcionesInput, {
    nullable: false
  })
  update!: UsuarioUpdateWithoutInscripcionesInput;

  @TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionesInput, {
    nullable: false
  })
  create!: UsuarioCreateWithoutInscripcionesInput;
}
