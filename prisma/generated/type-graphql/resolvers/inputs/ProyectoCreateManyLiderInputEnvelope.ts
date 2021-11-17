import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateManyLiderInput } from "../inputs/ProyectoCreateManyLiderInput";

@TypeGraphQL.InputType("ProyectoCreateManyLiderInputEnvelope", {
  isAbstract: true
})
export class ProyectoCreateManyLiderInputEnvelope {
  @TypeGraphQL.Field(_type => [ProyectoCreateManyLiderInput], {
    nullable: false
  })
  data!: ProyectoCreateManyLiderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
