import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCountOrderByAggregateInput } from "../inputs/InscripcionCountOrderByAggregateInput";
import { InscripcionMaxOrderByAggregateInput } from "../inputs/InscripcionMaxOrderByAggregateInput";
import { InscripcionMinOrderByAggregateInput } from "../inputs/InscripcionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InscripcionOrderByWithAggregationInput", {
  isAbstract: true
})
export class InscripcionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  estado?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fechaIngreso?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fecjaEgreso?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  proyectoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  usuarioId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InscripcionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: InscripcionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InscripcionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: InscripcionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InscripcionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: InscripcionMinOrderByAggregateInput | undefined;
}
