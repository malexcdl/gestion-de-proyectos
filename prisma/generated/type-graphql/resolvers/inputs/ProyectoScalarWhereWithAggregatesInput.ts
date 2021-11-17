import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_EstadoProyectoWithAggregatesFilter } from "../inputs/EnumEnum_EstadoProyectoWithAggregatesFilter";
import { EnumEnum_FaseProyectoWithAggregatesFilter } from "../inputs/EnumEnum_FaseProyectoWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProyectoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProyectoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProyectoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProyectoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProyectoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProyectoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nombre?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  presupuesto?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  fechaInicio?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  fechaFin?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  usuarioId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_EstadoProyectoWithAggregatesFilter, {
    nullable: true
  })
  estado?: EnumEnum_EstadoProyectoWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_FaseProyectoWithAggregatesFilter, {
    nullable: true
  })
  fase?: EnumEnum_FaseProyectoWithAggregatesFilter | undefined;
}
