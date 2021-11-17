import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProyectoOrderByWithAggregationInput } from "../../../inputs/ProyectoOrderByWithAggregationInput";
import { ProyectoScalarWhereWithAggregatesInput } from "../../../inputs/ProyectoScalarWhereWithAggregatesInput";
import { ProyectoWhereInput } from "../../../inputs/ProyectoWhereInput";
import { ProyectoScalarFieldEnum } from "../../../../enums/ProyectoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProyectoArgs {
  @TypeGraphQL.Field(_type => ProyectoWhereInput, {
    nullable: true
  })
  where?: ProyectoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProyectoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProyectoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProyectoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "nombre" | "presupuesto" | "fechaInicio" | "fechaFin" | "usuarioId" | "estado" | "fase">;

  @TypeGraphQL.Field(_type => ProyectoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProyectoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
