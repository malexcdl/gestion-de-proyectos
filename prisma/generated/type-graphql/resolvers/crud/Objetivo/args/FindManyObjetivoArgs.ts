import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ObjetivoOrderByWithRelationInput } from "../../../inputs/ObjetivoOrderByWithRelationInput";
import { ObjetivoWhereInput } from "../../../inputs/ObjetivoWhereInput";
import { ObjetivoWhereUniqueInput } from "../../../inputs/ObjetivoWhereUniqueInput";
import { ObjetivoScalarFieldEnum } from "../../../../enums/ObjetivoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyObjetivoArgs {
  @TypeGraphQL.Field(_type => ObjetivoWhereInput, {
    nullable: true
  })
  where?: ObjetivoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ObjetivoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ObjetivoWhereUniqueInput, {
    nullable: true
  })
  cursor?: ObjetivoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "descripcion" | "tipo" | "proyectoId"> | undefined;
}
