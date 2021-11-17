import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateOrConnectWithoutAvancesInput } from "../inputs/ProyectoCreateOrConnectWithoutAvancesInput";
import { ProyectoCreateWithoutAvancesInput } from "../inputs/ProyectoCreateWithoutAvancesInput";
import { ProyectoUpdateWithoutAvancesInput } from "../inputs/ProyectoUpdateWithoutAvancesInput";
import { ProyectoUpsertWithoutAvancesInput } from "../inputs/ProyectoUpsertWithoutAvancesInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoUpdateOneRequiredWithoutAvancesInput", {
  isAbstract: true
})
export class ProyectoUpdateOneRequiredWithoutAvancesInput {
  @TypeGraphQL.Field(_type => ProyectoCreateWithoutAvancesInput, {
    nullable: true
  })
  create?: ProyectoCreateWithoutAvancesInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutAvancesInput, {
    nullable: true
  })
  connectOrCreate?: ProyectoCreateOrConnectWithoutAvancesInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoUpsertWithoutAvancesInput, {
    nullable: true
  })
  upsert?: ProyectoUpsertWithoutAvancesInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProyectoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoUpdateWithoutAvancesInput, {
    nullable: true
  })
  update?: ProyectoUpdateWithoutAvancesInput | undefined;
}
