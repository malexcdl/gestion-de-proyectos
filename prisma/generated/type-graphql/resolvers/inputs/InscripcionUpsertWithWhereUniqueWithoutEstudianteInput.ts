import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCreateWithoutEstudianteInput } from "../inputs/InscripcionCreateWithoutEstudianteInput";
import { InscripcionUpdateWithoutEstudianteInput } from "../inputs/InscripcionUpdateWithoutEstudianteInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.InputType("InscripcionUpsertWithWhereUniqueWithoutEstudianteInput", {
  isAbstract: true
})
export class InscripcionUpsertWithWhereUniqueWithoutEstudianteInput {
  @TypeGraphQL.Field(_type => InscripcionWhereUniqueInput, {
    nullable: false
  })
  where!: InscripcionWhereUniqueInput;

  @TypeGraphQL.Field(_type => InscripcionUpdateWithoutEstudianteInput, {
    nullable: false
  })
  update!: InscripcionUpdateWithoutEstudianteInput;

  @TypeGraphQL.Field(_type => InscripcionCreateWithoutEstudianteInput, {
    nullable: false
  })
  create!: InscripcionCreateWithoutEstudianteInput;
}
