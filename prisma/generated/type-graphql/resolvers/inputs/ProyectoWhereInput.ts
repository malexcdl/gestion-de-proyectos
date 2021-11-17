import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceListRelationFilter } from "../inputs/AvanceListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_EstadoProyectoFilter } from "../inputs/EnumEnum_EstadoProyectoFilter";
import { EnumEnum_FaseProyectoFilter } from "../inputs/EnumEnum_FaseProyectoFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { ObjetivoListRelationFilter } from "../inputs/ObjetivoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";

@TypeGraphQL.InputType("ProyectoWhereInput", {
  isAbstract: true
})
export class ProyectoWhereInput {
  @TypeGraphQL.Field(_type => [ProyectoWhereInput], {
    nullable: true
  })
  AND?: ProyectoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoWhereInput], {
    nullable: true
  })
  OR?: ProyectoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoWhereInput], {
    nullable: true
  })
  NOT?: ProyectoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nombre?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  presupuesto?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  fechaInicio?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  fechaFin?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UsuarioRelationFilter, {
    nullable: true
  })
  lider?: UsuarioRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  usuarioId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_EstadoProyectoFilter, {
    nullable: true
  })
  estado?: EnumEnum_EstadoProyectoFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_FaseProyectoFilter, {
    nullable: true
  })
  fase?: EnumEnum_FaseProyectoFilter | undefined;

  @TypeGraphQL.Field(_type => ObjetivoListRelationFilter, {
    nullable: true
  })
  objetivos?: ObjetivoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AvanceListRelationFilter, {
    nullable: true
  })
  avances?: AvanceListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => InscripcionListRelationFilter, {
    nullable: true
  })
  inscripciones?: InscripcionListRelationFilter | undefined;
}
