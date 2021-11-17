import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Proyecto } from "../models/Proyecto";
import { Enum_TipoObjetivo } from "../enums/Enum_TipoObjetivo";

@TypeGraphQL.ObjectType("Objetivo", {
  isAbstract: true
})
export class Objetivo {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descripcion!: string;

  @TypeGraphQL.Field(_type => Enum_TipoObjetivo, {
    nullable: false
  })
  tipo!: "General" | "Especifico";

  proyecto?: Proyecto;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  proyectoId!: string;
}
