import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAvanceArgs } from "./args/AggregateAvanceArgs";
import { Avance } from "../../../models/Avance";
import { AggregateAvance } from "../../outputs/AggregateAvance";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Avance)
export class AggregateAvanceResolver {
  @TypeGraphQL.Query(_returns => AggregateAvance, {
    nullable: false
  })
  async aggregateAvance(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAvanceArgs): Promise<AggregateAvance> {
    return getPrismaFromContext(ctx).avance.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
