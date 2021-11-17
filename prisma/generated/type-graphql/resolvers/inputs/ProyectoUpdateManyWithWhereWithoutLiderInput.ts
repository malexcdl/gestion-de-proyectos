import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoScalarWhereInput } from "../inputs/ProyectoScalarWhereInput";
import { ProyectoUpdateManyMutationInput } from "../inputs/ProyectoUpdateManyMutationInput";

@TypeGraphQL.InputType("ProyectoUpdateManyWithWhereWithoutLiderInput", {
  isAbstract: true
})
export class ProyectoUpdateManyWithWhereWithoutLiderInput {
  @TypeGraphQL.Field(_type => ProyectoScalarWhereInput, {
    nullable: false
  })
  where!: ProyectoScalarWhereInput;

  @TypeGraphQL.Field(_type => ProyectoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProyectoUpdateManyMutationInput;
}
