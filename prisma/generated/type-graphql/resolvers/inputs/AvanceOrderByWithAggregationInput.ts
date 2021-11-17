import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCountOrderByAggregateInput } from "../inputs/AvanceCountOrderByAggregateInput";
import { AvanceMaxOrderByAggregateInput } from "../inputs/AvanceMaxOrderByAggregateInput";
import { AvanceMinOrderByAggregateInput } from "../inputs/AvanceMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AvanceOrderByWithAggregationInput", {
  isAbstract: true
})
export class AvanceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fecha?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  descripcion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  observaciones?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  proyectoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  usuarioId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AvanceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AvanceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AvanceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AvanceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AvanceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AvanceMinOrderByAggregateInput | undefined;
}
