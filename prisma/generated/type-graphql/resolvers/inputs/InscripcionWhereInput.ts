import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_EstadoInscripcionFilter } from "../inputs/EnumEnum_EstadoInscripcionFilter";
import { ProyectoRelationFilter } from "../inputs/ProyectoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";

@TypeGraphQL.InputType("InscripcionWhereInput", {
  isAbstract: true
})
export class InscripcionWhereInput {
  @TypeGraphQL.Field(_type => [InscripcionWhereInput], {
    nullable: true
  })
  AND?: InscripcionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionWhereInput], {
    nullable: true
  })
  OR?: InscripcionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionWhereInput], {
    nullable: true
  })
  NOT?: InscripcionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_EstadoInscripcionFilter, {
    nullable: true
  })
  estado?: EnumEnum_EstadoInscripcionFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  fechaIngreso?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  fecjaEgreso?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ProyectoRelationFilter, {
    nullable: true
  })
  proyecto?: ProyectoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  proyectoId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UsuarioRelationFilter, {
    nullable: true
  })
  estudiante?: UsuarioRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  usuarioId?: StringFilter | undefined;
}
