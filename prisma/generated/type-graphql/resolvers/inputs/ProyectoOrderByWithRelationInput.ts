import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceOrderByRelationAggregateInput } from "../inputs/AvanceOrderByRelationAggregateInput";
import { InscripcionOrderByRelationAggregateInput } from "../inputs/InscripcionOrderByRelationAggregateInput";
import { ObjetivoOrderByRelationAggregateInput } from "../inputs/ObjetivoOrderByRelationAggregateInput";
import { UsuarioOrderByWithRelationInput } from "../inputs/UsuarioOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProyectoOrderByWithRelationInput", {
  isAbstract: true
})
export class ProyectoOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => UsuarioOrderByWithRelationInput, {
    nullable: true
  })
  lider?: UsuarioOrderByWithRelationInput | undefined;

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

  @TypeGraphQL.Field(_type => ObjetivoOrderByRelationAggregateInput, {
    nullable: true
  })
  objetivos?: ObjetivoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AvanceOrderByRelationAggregateInput, {
    nullable: true
  })
  avances?: AvanceOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InscripcionOrderByRelationAggregateInput, {
    nullable: true
  })
  inscripciones?: InscripcionOrderByRelationAggregateInput | undefined;
}
