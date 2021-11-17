import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoCreateManyProyectoInput } from "../inputs/ObjetivoCreateManyProyectoInput";

@TypeGraphQL.InputType("ObjetivoCreateManyProyectoInputEnvelope", {
  isAbstract: true
})
export class ObjetivoCreateManyProyectoInputEnvelope {
  @TypeGraphQL.Field(_type => [ObjetivoCreateManyProyectoInput], {
    nullable: false
  })
  data!: ObjetivoCreateManyProyectoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
