import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateOrConnectWithoutObjetivosInput } from "../inputs/ProyectoCreateOrConnectWithoutObjetivosInput";
import { ProyectoCreateWithoutObjetivosInput } from "../inputs/ProyectoCreateWithoutObjetivosInput";
import { ProyectoUpdateWithoutObjetivosInput } from "../inputs/ProyectoUpdateWithoutObjetivosInput";
import { ProyectoUpsertWithoutObjetivosInput } from "../inputs/ProyectoUpsertWithoutObjetivosInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoUpdateOneRequiredWithoutObjetivosInput", {
  isAbstract: true
})
export class ProyectoUpdateOneRequiredWithoutObjetivosInput {
  @TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosInput, {
    nullable: true
  })
  create?: ProyectoCreateWithoutObjetivosInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutObjetivosInput, {
    nullable: true
  })
  connectOrCreate?: ProyectoCreateOrConnectWithoutObjetivosInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoUpsertWithoutObjetivosInput, {
    nullable: true
  })
  upsert?: ProyectoUpsertWithoutObjetivosInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProyectoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoUpdateWithoutObjetivosInput, {
    nullable: true
  })
  update?: ProyectoUpdateWithoutObjetivosInput | undefined;
}
