import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCreateManyEstudianteInput } from "../inputs/InscripcionCreateManyEstudianteInput";

@TypeGraphQL.InputType("InscripcionCreateManyEstudianteInputEnvelope", {
  isAbstract: true
})
export class InscripcionCreateManyEstudianteInputEnvelope {
  @TypeGraphQL.Field(_type => [InscripcionCreateManyEstudianteInput], {
    nullable: false
  })
  data!: InscripcionCreateManyEstudianteInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
