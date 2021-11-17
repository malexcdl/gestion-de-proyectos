import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuarioCountOrderByAggregateInput } from "../inputs/UsuarioCountOrderByAggregateInput";
import { UsuarioMaxOrderByAggregateInput } from "../inputs/UsuarioMaxOrderByAggregateInput";
import { UsuarioMinOrderByAggregateInput } from "../inputs/UsuarioMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UsuarioOrderByWithAggregationInput", {
  isAbstract: true
})
export class UsuarioOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  correo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nombre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  apellido?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identificacion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  telefono?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rol?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  estado?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UsuarioCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UsuarioCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UsuarioMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuarioMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UsuarioMinOrderByAggregateInput | undefined;
}
