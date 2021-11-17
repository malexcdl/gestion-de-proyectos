import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertObjetivoArgs } from "./args/UpsertObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Objetivo)
export class UpsertObjetivoResolver {
  @TypeGraphQL.Mutation(_returns => Objetivo, {
    nullable: false
  })
  async upsertObjetivo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertObjetivoArgs): Promise<Objetivo> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).objetivo.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
