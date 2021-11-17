import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceUpdateWithoutProyectoInput } from "../inputs/AvanceUpdateWithoutProyectoInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.InputType("AvanceUpdateWithWhereUniqueWithoutProyectoInput", {
  isAbstract: true
})
export class AvanceUpdateWithWhereUniqueWithoutProyectoInput {
  @TypeGraphQL.Field(_type => AvanceWhereUniqueInput, {
    nullable: false
  })
  where!: AvanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvanceUpdateWithoutProyectoInput, {
    nullable: false
  })
  data!: AvanceUpdateWithoutProyectoInput;
}
