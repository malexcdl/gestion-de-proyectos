import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateWithoutAvancesCreadosInput";
import { UsuarioUpdateWithoutAvancesCreadosInput } from "../inputs/UsuarioUpdateWithoutAvancesCreadosInput";

@TypeGraphQL.InputType("UsuarioUpsertWithoutAvancesCreadosInput", {
  isAbstract: true
})
export class UsuarioUpsertWithoutAvancesCreadosInput {
  @TypeGraphQL.Field(_type => UsuarioUpdateWithoutAvancesCreadosInput, {
    nullable: false
  })
  update!: UsuarioUpdateWithoutAvancesCreadosInput;

  @TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesCreadosInput, {
    nullable: false
  })
  create!: UsuarioCreateWithoutAvancesCreadosInput;
}
