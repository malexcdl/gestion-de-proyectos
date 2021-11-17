import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AvanceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AvanceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AvanceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AvanceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AvanceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AvanceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  fecha?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  descripcion?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  observaciones?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  proyectoId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  usuarioId?: StringWithAggregatesFilter | undefined;
}
