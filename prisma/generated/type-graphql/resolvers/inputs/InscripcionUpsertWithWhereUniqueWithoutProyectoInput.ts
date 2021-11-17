import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCreateWithoutProyectoInput } from "../inputs/InscripcionCreateWithoutProyectoInput";
import { InscripcionUpdateWithoutProyectoInput } from "../inputs/InscripcionUpdateWithoutProyectoInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.InputType("InscripcionUpsertWithWhereUniqueWithoutProyectoInput", {
  isAbstract: true
})
export class InscripcionUpsertWithWhereUniqueWithoutProyectoInput {
  @TypeGraphQL.Field(_type => InscripcionWhereUniqueInput, {
    nullable: false
  })
  where!: InscripcionWhereUniqueInput;

  @TypeGraphQL.Field(_type => InscripcionUpdateWithoutProyectoInput, {
    nullable: false
  })
  update!: InscripcionUpdateWithoutProyectoInput;

  @TypeGraphQL.Field(_type => InscripcionCreateWithoutProyectoInput, {
    nullable: false
  })
  create!: InscripcionCreateWithoutProyectoInput;
}
