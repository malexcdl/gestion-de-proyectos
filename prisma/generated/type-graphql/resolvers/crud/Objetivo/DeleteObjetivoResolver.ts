import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteObjetivoArgs } from "./args/DeleteObjetivoArgs";
import { Objetivo } from "../../../models/Objetivo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Objetivo)
export class DeleteObjetivoResolver {
  @TypeGraphQL.Mutation(_returns => Objetivo, {
    nullable: true
  })
  async deleteObjetivo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteObjetivoArgs): Promise<Objetivo | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).objetivo.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
