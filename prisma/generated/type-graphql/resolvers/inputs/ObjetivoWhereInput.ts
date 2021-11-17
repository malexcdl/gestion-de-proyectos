import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEnum_TipoObjetivoFilter } from "../inputs/EnumEnum_TipoObjetivoFilter";
import { ProyectoRelationFilter } from "../inputs/ProyectoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ObjetivoWhereInput", {
  isAbstract: true
})
export class ObjetivoWhereInput {
  @TypeGraphQL.Field(_type => [ObjetivoWhereInput], {
    nullable: true
  })
  AND?: ObjetivoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoWhereInput], {
    nullable: true
  })
  OR?: ObjetivoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoWhereInput], {
    nullable: true
  })
  NOT?: ObjetivoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  descripcion?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_TipoObjetivoFilter, {
    nullable: true
  })
  tipo?: EnumEnum_TipoObjetivoFilter | undefined;

  @TypeGraphQL.Field(_type => ProyectoRelationFilter, {
    nullable: true
  })
  proyecto?: ProyectoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  proyectoId?: StringFilter | undefined;
}
