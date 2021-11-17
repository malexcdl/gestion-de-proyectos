import * as TypeGraphQL from "type-graphql";
import { Avance } from "../../../models/Avance";
import { Inscripcion } from "../../../models/Inscripcion";
import { Objetivo } from "../../../models/Objetivo";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
import { ProyectoAvancesArgs } from "./args/ProyectoAvancesArgs";
import { ProyectoInscripcionesArgs } from "./args/ProyectoInscripcionesArgs";
import { ProyectoObjetivosArgs } from "./args/ProyectoObjetivosArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Proyecto)
export class ProyectoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Usuario, {
    nullable: false
  })
  async lider(@TypeGraphQL.Root() proyecto: Proyecto, @TypeGraphQL.Ctx() ctx: any): Promise<Usuario> {
    return getPrismaFromContext(ctx).proyecto.findUnique({
      where: {
        id: proyecto.id,
      },
    }).lider({});
  }

  @TypeGraphQL.FieldResolver(_type => [Objetivo], {
    nullable: false
  })
  async objetivos(@TypeGraphQL.Root() proyecto: Proyecto, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProyectoObjetivosArgs): Promise<Objetivo[]> {
    return getPrismaFromContext(ctx).proyecto.findUnique({
      where: {
        id: proyecto.id,
      },
    }).objetivos(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Avance], {
    nullable: false
  })
  async avances(@TypeGraphQL.Root() proyecto: Proyecto, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProyectoAvancesArgs): Promise<Avance[]> {
    return getPrismaFromContext(ctx).proyecto.findUnique({
      where: {
        id: proyecto.id,
      },
    }).avances(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Inscripcion], {
    nullable: false
  })
  async inscripciones(@TypeGraphQL.Root() proyecto: Proyecto, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProyectoInscripcionesArgs): Promise<Inscripcion[]> {
    return getPrismaFromContext(ctx).proyecto.findUnique({
      where: {
        id: proyecto.id,
      },
    }).inscripciones(args);
  }
}
