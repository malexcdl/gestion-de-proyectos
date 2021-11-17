import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_EstadoProyecto } from "../../enums/Enum_EstadoProyecto";
import { Enum_FaseProyecto } from "../../enums/Enum_FaseProyecto";

@TypeGraphQL.ObjectType("ProyectoMinAggregate", {
  isAbstract: true
})
export class ProyectoMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nombre!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  presupuesto!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  fechaInicio!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  fechaFin!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  usuarioId!: string | null;

  @TypeGraphQL.Field(_type => Enum_EstadoProyecto, {
    nullable: true
  })
  estado!: "Activo" | "Inactivo" | null;

  @TypeGraphQL.Field(_type => Enum_FaseProyecto, {
    nullable: true
  })
  fase!: "Iniciado" | "Desarrollo" | "Terminado" | null;
}
