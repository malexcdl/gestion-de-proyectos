import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProyectoArgs } from "./args/AggregateProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
import { AggregateProyecto } from "../../outputs/AggregateProyecto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Proyecto)
export class AggregateProyectoResolver {
  @TypeGraphQL.Query(_returns => AggregateProyecto, {
    nullable: false
  })
  async aggregateProyecto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProyectoArgs): Promise<AggregateProyecto> {
    return getPrismaFromContext(ctx).proyecto.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
