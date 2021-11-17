import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionScalarWhereInput } from "../inputs/InscripcionScalarWhereInput";
import { InscripcionUpdateManyMutationInput } from "../inputs/InscripcionUpdateManyMutationInput";

@TypeGraphQL.InputType("InscripcionUpdateManyWithWhereWithoutEstudianteInput", {
  isAbstract: true
})
export class InscripcionUpdateManyWithWhereWithoutEstudianteInput {
  @TypeGraphQL.Field(_type => InscripcionScalarWhereInput, {
    nullable: false
  })
  where!: InscripcionScalarWhereInput;

  @TypeGraphQL.Field(_type => InscripcionUpdateManyMutationInput, {
    nullable: false
  })
  data!: InscripcionUpdateManyMutationInput;
}
