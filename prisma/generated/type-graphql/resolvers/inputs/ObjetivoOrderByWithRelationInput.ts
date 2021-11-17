import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoOrderByWithRelationInput } from "../inputs/ProyectoOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ObjetivoOrderByWithRelationInput", {
  isAbstract: true
})
export class ObjetivoOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ProyectoOrderByWithRelationInput, {
    nullable: true
  })
  proyecto?: ProyectoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  proyectoId?: "asc" | "desc" | undefined;
}
