import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoAvgOrderByAggregateInput } from "../inputs/ProyectoAvgOrderByAggregateInput";
import { ProyectoCountOrderByAggregateInput } from "../inputs/ProyectoCountOrderByAggregateInput";
import { ProyectoMaxOrderByAggregateInput } from "../inputs/ProyectoMaxOrderByAggregateInput";
import { ProyectoMinOrderByAggregateInput } from "../inputs/ProyectoMinOrderByAggregateInput";
import { ProyectoSumOrderByAggregateInput } from "../inputs/ProyectoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProyectoOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProyectoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nombre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  presupuesto?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fechaInicio?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fechaFin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  usuarioId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  estado?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fase?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProyectoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProyectoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProyectoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProyectoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProyectoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProyectoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProyectoSumOrderByAggregateInput | undefined;
}
