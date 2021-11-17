import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateWithoutAvancesCreadosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutAvancesCreadosInput", {
  isAbstract: true
})
export class UsuarioCreateOrConnectWithoutAvancesCreadosInput {
  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: false
  })
  where!: UsuarioWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesCreadosInput, {
    nullable: false
  })
  create!: UsuarioCreateWithoutAvancesCreadosInput;
}
