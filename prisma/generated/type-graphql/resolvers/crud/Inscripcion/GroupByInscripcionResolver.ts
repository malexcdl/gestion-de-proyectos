import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByInscripcionArgs } from "./args/GroupByInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
import { InscripcionGroupBy } from "../../outputs/InscripcionGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inscripcion)
export class GroupByInscripcionResolver {
  @TypeGraphQL.Query(_returns => [InscripcionGroupBy], {
    nullable: false
  })
  async groupByInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByInscripcionArgs): Promise<InscripcionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
