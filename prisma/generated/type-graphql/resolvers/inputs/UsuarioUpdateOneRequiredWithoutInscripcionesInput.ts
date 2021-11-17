import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCreateOrConnectWithoutInscripcionesInput } from "../inputs/UsuarioCreateOrConnectWithoutInscripcionesInput";
import { UsuarioCreateWithoutInscripcionesInput } from "../inputs/UsuarioCreateWithoutInscripcionesInput";
import { UsuarioUpdateWithoutInscripcionesInput } from "../inputs/UsuarioUpdateWithoutInscripcionesInput";
import { UsuarioUpsertWithoutInscripcionesInput } from "../inputs/UsuarioUpsertWithoutInscripcionesInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";

@TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutInscripcionesInput", {
  isAbstract: true
})
export class UsuarioUpdateOneRequiredWithoutInscripcionesInput {
  @TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionesInput, {
    nullable: true
  })
  create?: UsuarioCreateWithoutInscripcionesInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutInscripcionesInput, {
    nullable: true
  })
  connectOrCreate?: UsuarioCreateOrConnectWithoutInscripcionesInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpsertWithoutInscripcionesInput, {
    nullable: true
  })
  upsert?: UsuarioUpsertWithoutInscripcionesInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: true
  })
  connect?: UsuarioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioUpdateWithoutInscripcionesInput, {
    nullable: true
  })
  update?: UsuarioUpdateWithoutInscripcionesInput | undefined;
}
