import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByObjetivoArgs } from "./args/GroupByObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
import { ObjetivoGroupBy } from "../../outputs/ObjetivoGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Objetivo)
export class GroupByObjetivoResolver {
  @TypeGraphQL.Query(_returns => [ObjetivoGroupBy], {
    nullable: false
  })
  async groupByObjetivo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByObjetivoArgs): Promise<ObjetivoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).objetivo.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
