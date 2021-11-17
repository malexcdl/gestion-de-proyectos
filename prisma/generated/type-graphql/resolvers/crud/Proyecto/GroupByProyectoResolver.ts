import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByProyectoArgs } from "./args/GroupByProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
import { ProyectoGroupBy } from "../../outputs/ProyectoGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Proyecto)
export class GroupByProyectoResolver {
  @TypeGraphQL.Query(_returns => [ProyectoGroupBy], {
    nullable: false
  })
  async groupByProyecto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProyectoArgs): Promise<ProyectoGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).proyecto.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
