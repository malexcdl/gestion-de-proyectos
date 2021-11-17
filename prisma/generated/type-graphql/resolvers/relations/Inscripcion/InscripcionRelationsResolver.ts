import * as TypeGraphQL from "type-graphql";
import { Inscripcion } from "../../../models/Inscripcion";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inscripcion)
export class InscripcionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Proyecto, {
    nullable: false
  })
  async proyecto(@TypeGraphQL.Root() inscripcion: Inscripcion, @TypeGraphQL.Ctx() ctx: any): Promise<Proyecto> {
    return getPrismaFromContext(ctx).inscripcion.findUnique({
      where: {
        id: inscripcion.id,
      },
    }).proyecto({});
  }

  @TypeGraphQL.FieldResolver(_type => Usuario, {
    nullable: false
  })
  async estudiante(@TypeGraphQL.Root() inscripcion: Inscripcion, @TypeGraphQL.Ctx() ctx: any): Promise<Usuario> {
    return getPrismaFromContext(ctx).inscripcion.findUnique({
      where: {
        id: inscripcion.id,
      },
    }).estudiante({});
  }
}
