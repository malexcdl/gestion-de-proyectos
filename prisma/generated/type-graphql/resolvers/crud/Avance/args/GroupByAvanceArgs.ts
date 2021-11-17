import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvanceOrderByWithAggregationInput } from "../../../inputs/AvanceOrderByWithAggregationInput";
import { AvanceScalarWhereWithAggregatesInput } from "../../../inputs/AvanceScalarWhereWithAggregatesInput";
import { AvanceWhereInput } from "../../../inputs/AvanceWhereInput";
import { AvanceScalarFieldEnum } from "../../../../enums/AvanceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAvanceArgs {
  @TypeGraphQL.Field(_type => AvanceWhereInput, {
    nullable: true
  })
  where?: AvanceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AvanceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AvanceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "fecha" | "descripcion" | "observaciones" | "proyectoId" | "usuarioId">;

  @TypeGraphQL.Field(_type => AvanceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AvanceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
