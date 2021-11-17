import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateOrConnectWithoutAvancesInput } from "../inputs/ProyectoCreateOrConnectWithoutAvancesInput";
import { ProyectoCreateWithoutAvancesInput } from "../inputs/ProyectoCreateWithoutAvancesInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoCreateNestedOneWithoutAvancesInput", {
  isAbstract: true
})
export class ProyectoCreateNestedOneWithoutAvancesInput {
  @TypeGraphQL.Field(_type => ProyectoCreateWithoutAvancesInput, {
    nullable: true
  })
  create?: ProyectoCreateWithoutAvancesInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutAvancesInput, {
    nullable: true
  })
  connectOrCreate?: ProyectoCreateOrConnectWithoutAvancesInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProyectoWhereUniqueInput | undefined;
}
