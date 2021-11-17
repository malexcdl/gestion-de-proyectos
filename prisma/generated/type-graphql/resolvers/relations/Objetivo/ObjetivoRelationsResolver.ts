import * as TypeGraphQL from "type-graphql";
import { Objetivo } from "../../../models/Objetivo";
import { Proyecto } from "../../../models/Proyecto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Objetivo)
export class ObjetivoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Proyecto, {
    nullable: false
  })
  async proyecto(@TypeGraphQL.Root() objetivo: Objetivo, @TypeGraphQL.Ctx() ctx: any): Promise<Proyecto> {
    return getPrismaFromContext(ctx).objetivo.findUnique({
      where: {
        id: objetivo.id,
      },
    }).proyecto({});
  }
}
