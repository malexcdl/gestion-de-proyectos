import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_EstadoInscripcionWithAggregatesFilter } from "../inputs/EnumEnum_EstadoInscripcionWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("InscripcionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class InscripcionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [InscripcionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: InscripcionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: InscripcionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: InscripcionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_EstadoInscripcionWithAggregatesFilter, {
    nullable: true
  })
  estado?: EnumEnum_EstadoInscripcionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  fechaIngreso?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  fecjaEgreso?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  proyectoId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  usuarioId?: StringWithAggregatesFilter | undefined;
}
