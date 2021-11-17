import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_TipoObjetivo } from "../../enums/Enum_TipoObjetivo";

@TypeGraphQL.InputType("ObjetivoCreateWithoutProyectoInput", {
  isAbstract: true
})
export class ObjetivoCreateWithoutProyectoInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descripcion!: string;

  @TypeGraphQL.Field(_type => Enum_TipoObjetivo, {
    nullable: false
  })
  tipo!: "General" | "Especifico";
}
