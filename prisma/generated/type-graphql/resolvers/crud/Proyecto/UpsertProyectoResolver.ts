import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertProyectoArgs } from "./args/UpsertProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Proyecto)
export class UpsertProyectoResolver {
  @TypeGraphQL.Mutation(_returns => Proyecto, {
    nullable: false
  })
  async upsertProyecto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertProyectoArgs): Promise<Proyecto> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).proyecto.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
