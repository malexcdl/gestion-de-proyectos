import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ObjetivoOrderByWithAggregationInput } from "../../../inputs/ObjetivoOrderByWithAggregationInput";
import { ObjetivoScalarWhereWithAggregatesInput } from "../../../inputs/ObjetivoScalarWhereWithAggregatesInput";
import { ObjetivoWhereInput } from "../../../inputs/ObjetivoWhereInput";
import { ObjetivoScalarFieldEnum } from "../../../../enums/ObjetivoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByObjetivoArgs {
  @TypeGraphQL.Field(_type => ObjetivoWhereInput, {
    nullable: true
  })
  where?: ObjetivoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ObjetivoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "descripcion" | "tipo" | "proyectoId">;

  @TypeGraphQL.Field(_type => ObjetivoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ObjetivoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
