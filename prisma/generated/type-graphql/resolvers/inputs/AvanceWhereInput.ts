import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProyectoRelationFilter } from "../inputs/ProyectoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";

@TypeGraphQL.InputType("AvanceWhereInput", {
  isAbstract: true
})
export class AvanceWhereInput {
  @TypeGraphQL.Field(_type => [AvanceWhereInput], {
    nullable: true
  })
  AND?: AvanceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceWhereInput], {
    nullable: true
  })
  OR?: AvanceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceWhereInput], {
    nullable: true
  })
  NOT?: AvanceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  fecha?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  descripcion?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  observaciones?: StringFilter | undefined;

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
  creadoPor?: UsuarioRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  usuarioId?: StringFilter | undefined;
}
