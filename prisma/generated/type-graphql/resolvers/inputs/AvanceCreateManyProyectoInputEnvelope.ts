import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateManyProyectoInput } from "../inputs/AvanceCreateManyProyectoInput";

@TypeGraphQL.InputType("AvanceCreateManyProyectoInputEnvelope", {
  isAbstract: true
})
export class AvanceCreateManyProyectoInputEnvelope {
  @TypeGraphQL.Field(_type => [AvanceCreateManyProyectoInput], {
    nullable: false
  })
  data!: AvanceCreateManyProyectoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
