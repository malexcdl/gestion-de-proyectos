import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Avance } from "../models/Avance";
import { Inscripcion } from "../models/Inscripcion";
import { Objetivo } from "../models/Objetivo";
import { Usuario } from "../models/Usuario";
import { Enum_EstadoProyecto } from "../enums/Enum_EstadoProyecto";
import { Enum_FaseProyecto } from "../enums/Enum_FaseProyecto";
import { ProyectoCount } from "../resolvers/outputs/ProyectoCount";

@TypeGraphQL.ObjectType("Proyecto", {
  isAbstract: true
})
export class Proyecto {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  presupuesto!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fechaInicio!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fechaFin!: Date;

  lider?: Usuario;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioId!: string;

  @TypeGraphQL.Field(_type => Enum_EstadoProyecto, {
    nullable: false
  })
  estado!: "Activo" | "Inactivo";

  @TypeGraphQL.Field(_type => Enum_FaseProyecto, {
    nullable: false
  })
  fase!: "Iniciado" | "Desarrollo" | "Terminado";

  objetivos?: Objetivo[];

  avances?: Avance[];

  inscripciones?: Inscripcion[];

  @TypeGraphQL.Field(_type => ProyectoCount, {
    nullable: false
  })
  _count!: ProyectoCount;
}
