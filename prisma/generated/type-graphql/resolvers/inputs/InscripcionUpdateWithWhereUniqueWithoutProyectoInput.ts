import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionUpdateWithoutProyectoInput } from "../inputs/InscripcionUpdateWithoutProyectoInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";

@TypeGraphQL.InputType("InscripcionUpdateWithWhereUniqueWithoutProyectoInput", {
  isAbstract: true
})
export class InscripcionUpdateWithWhereUniqueWithoutProyectoInput {
  @TypeGraphQL.Field(_type => InscripcionWhereUniqueInput, {
    nullable: false
  })
  where!: InscripcionWhereUniqueInput;

  @TypeGraphQL.Field(_type => InscripcionUpdateWithoutProyectoInput, {
    nullable: false
  })
  data!: InscripcionUpdateWithoutProyectoInput;
}
