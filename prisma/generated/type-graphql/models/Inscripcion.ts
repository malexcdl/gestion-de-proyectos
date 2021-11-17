import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Proyecto } from "../models/Proyecto";
import { Usuario } from "../models/Usuario";
import { Enum_EstadoInscripcion } from "../enums/Enum_EstadoInscripcion";

@TypeGraphQL.ObjectType("Inscripcion", {
  isAbstract: true
})
export class Inscripcion {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Enum_EstadoInscripcion, {
    nullable: false
  })
  estado!: "Aceptada" | "Rechazada";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fechaIngreso!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fecjaEgreso!: Date;

  proyecto?: Proyecto;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  proyectoId!: string;

  estudiante?: Usuario;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioId!: string;
}
