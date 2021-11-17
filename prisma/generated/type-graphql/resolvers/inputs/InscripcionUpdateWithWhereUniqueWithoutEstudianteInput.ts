import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionUpdateWithoutEstudianteInput } from "../inputs/InscripcionUpdateWithoutEstudianteInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.InputType("InscripcionUpdateWithWhereUniqueWithoutEstudianteInput", {
  isAbstract: true
})
export class InscripcionUpdateWithWhereUniqueWithoutEstudianteInput {
  @TypeGraphQL.Field(_type => InscripcionWhereUniqueInput, {
    nullable: false
  })
  where!: InscripcionWhereUniqueInput;

  @TypeGraphQL.Field(_type => InscripcionUpdateWithoutEstudianteInput, {
    nullable: false
  })
  data!: InscripcionUpdateWithoutEstudianteInput;
}
