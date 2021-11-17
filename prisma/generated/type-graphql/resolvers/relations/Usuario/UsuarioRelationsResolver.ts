import * as TypeGraphQL from "type-graphql";
import { Avance } from "../../../models/Avance";
import { Inscripcion } from "../../../models/Inscripcion";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
import { UsuarioAvancesCreadosArgs } from "./args/UsuarioAvancesCreadosArgs";
import { UsuarioInscripcionesArgs } from "./args/UsuarioInscripcionesArgs";
import { UsuarioProyectosLideradosArgs } from "./args/UsuarioProyectosLideradosArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Usuario)
export class UsuarioRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Proyecto], {
    nullable: false
  })
  async proyectosLiderados(@TypeGraphQL.Root() usuario: Usuario, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsuarioProyectosLideradosArgs): Promise<Proyecto[]> {
    return getPrismaFromContext(ctx).usuario.findUnique({
      where: {
        id: usuario.id,
      },
    }).proyectosLiderados(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Avance], {
    nullable: false
  })
  async avancesCreados(@TypeGraphQL.Root() usuario: Usuario, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsuarioAvancesCreadosArgs): Promise<Avance[]> {
    return getPrismaFromContext(ctx).usuario.findUnique({
      where: {
        id: usuario.id,
      },
    }).avancesCreados(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Inscripcion], {
    nullable: false
  })
  async inscripciones(@TypeGraphQL.Root() usuario: Usuario, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsuarioInscripcionesArgs): Promise<Inscripcion[]> {
    return getPrismaFromContext(ctx).usuario.findUnique({
      where: {
        id: usuario.id,
      },
    }).inscripciones(args);
  }
}
