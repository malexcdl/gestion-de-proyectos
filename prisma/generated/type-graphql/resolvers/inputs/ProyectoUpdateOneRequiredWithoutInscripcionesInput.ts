import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateOrConnectWithoutInscripcionesInput } from "../inputs/ProyectoCreateOrConnectWithoutInscripcionesInput";
import { ProyectoCreateWithoutInscripcionesInput } from "../inputs/ProyectoCreateWithoutInscripcionesInput";
import { ProyectoUpdateWithoutInscripcionesInput } from "../inputs/ProyectoUpdateWithoutInscripcionesInput";
import { ProyectoUpsertWithoutInscripcionesInput } from "../inputs/ProyectoUpsertWithoutInscripcionesInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoUpdateOneRequiredWithoutInscripcionesInput", {
  isAbstract: true
})
export class ProyectoUpdateOneRequiredWithoutInscripcionesInput {
  @TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionesInput, {
    nullable: true
  })
  create?: ProyectoCreateWithoutInscripcionesInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutInscripcionesInput, {
    nullable: true
  })
  connectOrCreate?: ProyectoCreateOrConnectWithoutInscripcionesInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoUpsertWithoutInscripcionesInput, {
    nullable: true
  })
  upsert?: ProyectoUpsertWithoutInscripcionesInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProyectoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoUpdateWithoutInscripcionesInput, {
    nullable: true
  })
  update?: ProyectoUpdateWithoutInscripcionesInput | undefined;
}
