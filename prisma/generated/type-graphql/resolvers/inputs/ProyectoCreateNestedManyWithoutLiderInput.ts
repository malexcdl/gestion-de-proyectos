import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateManyLiderInputEnvelope } from "../inputs/ProyectoCreateManyLiderInputEnvelope";
import { ProyectoCreateOrConnectWithoutLiderInput } from "../inputs/ProyectoCreateOrConnectWithoutLiderInput";
import { ProyectoCreateWithoutLiderInput } from "../inputs/ProyectoCreateWithoutLiderInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";

@TypeGraphQL.InputType("ProyectoCreateNestedManyWithoutLiderInput", {
  isAbstract: true
})
export class ProyectoCreateNestedManyWithoutLiderInput {
  @TypeGraphQL.Field(_type => [ProyectoCreateWithoutLiderInput], {
    nullable: true
  })
  create?: ProyectoCreateWithoutLiderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoCreateOrConnectWithoutLiderInput], {
    nullable: true
  })
  connectOrCreate?: ProyectoCreateOrConnectWithoutLiderInput[] | undefined;

  @TypeGraphQL.Field(_type => ProyectoCreateManyLiderInputEnvelope, {
    nullable: true
  })
  createMany?: ProyectoCreateManyLiderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProyectoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProyectoWhereUniqueInput[] | undefined;
}
