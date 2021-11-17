import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceListRelationFilter } from "../inputs/AvanceListRelationFilter";
import { EnumEnum_EstadoUsuarioFilter } from "../inputs/EnumEnum_EstadoUsuarioFilter";
import { EnumEnum_RolFilter } from "../inputs/EnumEnum_RolFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { ProyectoListRelationFilter } from "../inputs/ProyectoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UsuarioWhereInput", {
  isAbstract: true
})
export class UsuarioWhereInput {
  @TypeGraphQL.Field(_type => [UsuarioWhereInput], {
    nullable: true
  })
  AND?: UsuarioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioWhereInput], {
    nullable: true
  })
  OR?: UsuarioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioWhereInput], {
    nullable: true
  })
  NOT?: UsuarioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  correo?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nombre?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  apellido?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identificacion?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  telefono?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_RolFilter, {
    nullable: true
  })
  rol?: EnumEnum_RolFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_EstadoUsuarioFilter, {
    nullable: true
  })
  estado?: EnumEnum_EstadoUsuarioFilter | undefined;

  @TypeGraphQL.Field(_type => ProyectoListRelationFilter, {
    nullable: true
  })
  proyectosLiderados?: ProyectoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AvanceListRelationFilter, {
    nullable: true
  })
  avancesCreados?: AvanceListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => InscripcionListRelationFilter, {
    nullable: true
  })
  inscripciones?: InscripcionListRelationFilter | undefined;
}
