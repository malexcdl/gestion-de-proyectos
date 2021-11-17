import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateOrConnectWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateOrConnectWithoutAvancesCreadosInput";
import { UsuarioCreateWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateWithoutAvancesCreadosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutAvancesCreadosInput", {
  isAbstract: true
})
export class UsuarioCreateNestedOneWithoutAvancesCreadosInput {
  @TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesCreadosInput, {
    nullable: true
  })
  create?: UsuarioCreateWithoutAvancesCreadosInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutAvancesCreadosInput, {
    nullable: true
  })
  connectOrCreate?: UsuarioCreateOrConnectWithoutAvancesCreadosInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: true
  })
  connect?: UsuarioWhereUniqueInput | undefined;
}
