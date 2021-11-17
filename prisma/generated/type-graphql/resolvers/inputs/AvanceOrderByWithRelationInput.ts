import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoOrderByWithRelationInput } from "../inputs/ProyectoOrderByWithRelationInput";
import { UsuarioOrderByWithRelationInput } from "../inputs/UsuarioOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AvanceOrderByWithRelationInput", {
  isAbstract: true
})
export class AvanceOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ProyectoOrderByWithRelationInput, {
    nullable: true
  })
  proyecto?: ProyectoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  proyectoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UsuarioOrderByWithRelationInput, {
    nullable: true
  })
  creadoPor?: UsuarioOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  usuarioId?: "asc" | "desc" | undefined;
}
