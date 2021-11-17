import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ObjetivoOrderByWithRelationInput } from "../../../inputs/ObjetivoOrderByWithRelationInput";
import { ObjetivoWhereInput } from "../../../inputs/ObjetivoWhereInput";
import { ObjetivoWhereUniqueInput } from "../../../inputs/ObjetivoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateObjetivoArgs {
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
}
