import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertInscripcionArgs } from "./args/UpsertInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inscripcion)
export class UpsertInscripcionResolver {
  @TypeGraphQL.Mutation(_returns => Inscripcion, {
    nullable: false
  })
  async upsertInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertInscripcionArgs): Promise<Inscripcion> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
