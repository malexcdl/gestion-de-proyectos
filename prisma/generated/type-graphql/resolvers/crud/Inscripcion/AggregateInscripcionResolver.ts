import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateInscripcionArgs } from "./args/AggregateInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
import { AggregateInscripcion } from "../../outputs/AggregateInscripcion";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inscripcion)
export class AggregateInscripcionResolver {
  @TypeGraphQL.Query(_returns => AggregateInscripcion, {
    nullable: false
  })
  async aggregateInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInscripcionArgs): Promise<AggregateInscripcion> {
    return getPrismaFromContext(ctx).inscripcion.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
