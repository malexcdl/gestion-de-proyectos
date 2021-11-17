import * as TypeGraphQL from "type-graphql";
import { Avance } from "../../../models/Avance";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Avance)
export class AvanceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Proyecto, {
    nullable: false
  })
  async proyecto(@TypeGraphQL.Root() avance: Avance, @TypeGraphQL.Ctx() ctx: any): Promise<Proyecto> {
    return getPrismaFromContext(ctx).avance.findUnique({
      where: {
        id: avance.id,
      },
    }).proyecto({});
  }

  @TypeGraphQL.FieldResolver(_type => Usuario, {
    nullable: false
  })
  async creadoPor(@TypeGraphQL.Root() avance: Avance, @TypeGraphQL.Ctx() ctx: any): Promise<Usuario> {
    return getPrismaFromContext(ctx).avance.findUnique({
      where: {
        id: avance.id,
      },
    }).creadoPor({});
  }
}
