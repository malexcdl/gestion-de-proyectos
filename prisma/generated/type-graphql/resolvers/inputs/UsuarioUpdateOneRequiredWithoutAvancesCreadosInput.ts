import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateOrConnectWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateOrConnectWithoutAvancesCreadosInput";
import { UsuarioCreateWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateWithoutAvancesCreadosInput";
import { UsuarioUpdateWithoutAvancesCreadosInput } from "../inputs/UsuarioUpdateWithoutAvancesCreadosInput";
import { UsuarioUpsertWithoutAvancesCreadosInput } from "../inputs/UsuarioUpsertWithoutAvancesCreadosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutAvancesCreadosInput", {
  isAbstract: true
})
export class UsuarioUpdateOneRequiredWithoutAvancesCreadosInput {
  @TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesCreadosInput, {
    nullable: true
  })
  create?: UsuarioCreateWithoutAvancesCreadosInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutAvancesCreadosInput, {
    nullable: true
  })
  connectOrCreate?: UsuarioCreateOrConnectWithoutAvancesCreadosInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpsertWithoutAvancesCreadosInput, {
    nullable: true
  })
  upsert?: UsuarioUpsertWithoutAvancesCreadosInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: true
  })
  connect?: UsuarioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpdateWithoutAvancesCreadosInput, {
    nullable: true
  })
  update?: UsuarioUpdateWithoutAvancesCreadosInput | undefined;
}
