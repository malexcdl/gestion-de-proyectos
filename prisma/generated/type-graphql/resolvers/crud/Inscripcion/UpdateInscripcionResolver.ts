import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateInscripcionArgs } from "./args/UpdateInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inscripcion)
export class UpdateInscripcionResolver {
  @TypeGraphQL.Mutation(_returns => Inscripcion, {
    nullable: true
  })
  async updateInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateInscripcionArgs): Promise<Inscripcion | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
