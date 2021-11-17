import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoOrderByWithRelationInput } from "../inputs/ProyectoOrderByWithRelationInput";
import { UsuarioOrderByWithRelationInput } from "../inputs/UsuarioOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InscripcionOrderByWithRelationInput", {
  isAbstract: true
})
export class InscripcionOrderByWithRelationInput {
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
  estudiante?: UsuarioOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  usuarioId?: "asc" | "desc" | undefined;
}
