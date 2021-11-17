import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCreateManyProyectoInput } from "../inputs/InscripcionCreateManyProyectoInput";

@TypeGraphQL.InputType("InscripcionCreateManyProyectoInputEnvelope", {
  isAbstract: true
})
export class InscripcionCreateManyProyectoInputEnvelope {
  @TypeGraphQL.Field(_type => [InscripcionCreateManyProyectoInput], {
    nullable: false
  })
  data!: InscripcionCreateManyProyectoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
