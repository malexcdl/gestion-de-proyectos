import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyObjetivoArgs } from "./args/FindManyObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Objetivo)
export class FindManyObjetivoResolver {
  @TypeGraphQL.Query(_returns => [Objetivo], {
    nullable: false
  })
  async objetivos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyObjetivoArgs): Promise<Objetivo[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).objetivo.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
