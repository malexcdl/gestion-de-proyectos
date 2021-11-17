import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateOrConnectWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateOrConnectWithoutProyectosLideradosInput";
import { UsuarioCreateWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateWithoutProyectosLideradosInput";
import { UsuarioUpdateWithoutProyectosLideradosInput } from "../inputs/UsuarioUpdateWithoutProyectosLideradosInput";
import { UsuarioUpsertWithoutProyectosLideradosInput } from "../inputs/UsuarioUpsertWithoutProyectosLideradosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutProyectosLideradosInput", {
  isAbstract: true
})
export class UsuarioUpdateOneRequiredWithoutProyectosLideradosInput {
  @TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectosLideradosInput, {
    nullable: true
  })
  create?: UsuarioCreateWithoutProyectosLideradosInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutProyectosLideradosInput, {
    nullable: true
  })
  connectOrCreate?: UsuarioCreateOrConnectWithoutProyectosLideradosInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpsertWithoutProyectosLideradosInput, {
    nullable: true
  })
  upsert?: UsuarioUpsertWithoutProyectosLideradosInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: true
  })
  connect?: UsuarioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpdateWithoutProyectosLideradosInput, {
    nullable: true
  })
  update?: UsuarioUpdateWithoutProyectosLideradosInput | undefined;
}
