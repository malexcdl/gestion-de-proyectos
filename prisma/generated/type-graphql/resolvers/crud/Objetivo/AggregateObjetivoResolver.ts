import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateObjetivoArgs } from "./args/AggregateObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
import { AggregateObjetivo } from "../../outputs/AggregateObjetivo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Objetivo)
export class AggregateObjetivoResolver {
  @TypeGraphQL.Query(_returns => AggregateObjetivo, {
    nullable: false
  })
  async aggregateObjetivo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateObjetivoArgs): Promise<AggregateObjetivo> {
    return getPrismaFromContext(ctx).objetivo.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
