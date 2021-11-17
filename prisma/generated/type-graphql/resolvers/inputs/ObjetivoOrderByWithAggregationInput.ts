import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoCountOrderByAggregateInput } from "../inputs/ObjetivoCountOrderByAggregateInput";
import { ObjetivoMaxOrderByAggregateInput } from "../inputs/ObjetivoMaxOrderByAggregateInput";
import { ObjetivoMinOrderByAggregateInput } from "../inputs/ObjetivoMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ObjetivoOrderByWithAggregationInput", {
  isAbstract: true
})
export class ObjetivoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  descripcion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tipo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  proyectoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ObjetivoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ObjetivoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ObjetivoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ObjetivoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ObjetivoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ObjetivoMinOrderByAggregateInput | undefined;
}
