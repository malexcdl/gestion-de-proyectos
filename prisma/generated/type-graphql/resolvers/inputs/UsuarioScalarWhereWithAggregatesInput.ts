import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEnum_EstadoUsuarioWithAggregatesFilter } from "../inputs/EnumEnum_EstadoUsuarioWithAggregatesFilter";
import { EnumEnum_RolWithAggregatesFilter } from "../inputs/EnumEnum_RolWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UsuarioScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UsuarioScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UsuarioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UsuarioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UsuarioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuarioScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UsuarioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  correo?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nombre?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  apellido?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identificacion?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  telefono?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_RolWithAggregatesFilter, {
    nullable: true
  })
  rol?: EnumEnum_RolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_EstadoUsuarioWithAggregatesFilter, {
    nullable: true
  })
  estado?: EnumEnum_EstadoUsuarioWithAggregatesFilter | undefined;
}
