import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoAvgAggregate } from "../outputs/ProyectoAvgAggregate";
import { ProyectoCountAggregate } from "../outputs/ProyectoCountAggregate";
import { ProyectoMaxAggregate } from "../outputs/ProyectoMaxAggregate";
import { ProyectoMinAggregate } from "../outputs/ProyectoMinAggregate";
import { ProyectoSumAggregate } from "../outputs/ProyectoSumAggregate";
import { Enum_EstadoProyecto } from "../../enums/Enum_EstadoProyecto";
import { Enum_FaseProyecto } from "../../enums/Enum_FaseProyecto";

@TypeGraphQL.ObjectType("ProyectoGroupBy", {
  isAbstract: true
})
export class ProyectoGroupBy {
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

  @TypeGraphQL.Field(_type => ProyectoCountAggregate, {
    nullable: true
  })
  _count!: ProyectoCountAggregate | null;

  @TypeGraphQL.Field(_type => ProyectoAvgAggregate, {
    nullable: true
  })
  _avg!: ProyectoAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProyectoSumAggregate, {
    nullable: true
  })
  _sum!: ProyectoSumAggregate | null;

  @TypeGraphQL.Field(_type => ProyectoMinAggregate, {
    nullable: true
  })
  _min!: ProyectoMinAggregate | null;

  @TypeGraphQL.Field(_type => ProyectoMaxAggregate, {
    nullable: true
  })
  _max!: ProyectoMaxAggregate | null;
}
