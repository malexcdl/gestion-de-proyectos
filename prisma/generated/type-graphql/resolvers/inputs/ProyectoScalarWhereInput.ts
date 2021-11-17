import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_EstadoProyectoFilter } from "../inputs/EnumEnum_EstadoProyectoFilter";
import { EnumEnum_FaseProyectoFilter } from "../inputs/EnumEnum_FaseProyectoFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ProyectoScalarWhereInput", {
  isAbstract: true
})
export class ProyectoScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProyectoScalarWhereInput], {
    nullable: true
  })
  AND?: ProyectoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoScalarWhereInput], {
    nullable: true
  })
  OR?: ProyectoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoScalarWhereInput], {
    nullable: true
  })
  NOT?: ProyectoScalarWhereInput[] | undefined;

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
}
