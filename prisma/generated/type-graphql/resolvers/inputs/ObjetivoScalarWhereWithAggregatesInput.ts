import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEnum_TipoObjetivoWithAggregatesFilter } from "../inputs/EnumEnum_TipoObjetivoWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ObjetivoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ObjetivoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ObjetivoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ObjetivoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ObjetivoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ObjetivoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  descripcion?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_TipoObjetivoWithAggregatesFilter, {
    nullable: true
  })
  tipo?: EnumEnum_TipoObjetivoWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  proyectoId?: StringWithAggregatesFilter | undefined;
}
