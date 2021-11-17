import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateInscripcionArgs } from "./args/AggregateInscripcionArgs";
import { CreateInscripcionArgs } from "./args/CreateInscripcionArgs";
import { CreateManyInscripcionArgs } from "./args/CreateManyInscripcionArgs";
import { DeleteInscripcionArgs } from "./args/DeleteInscripcionArgs";
import { DeleteManyInscripcionArgs } from "./args/DeleteManyInscripcionArgs";
import { FindFirstInscripcionArgs } from "./args/FindFirstInscripcionArgs";
import { FindManyInscripcionArgs } from "./args/FindManyInscripcionArgs";
import { FindUniqueInscripcionArgs } from "./args/FindUniqueInscripcionArgs";
import { GroupByInscripcionArgs } from "./args/GroupByInscripcionArgs";
import { UpdateInscripcionArgs } from "./args/UpdateInscripcionArgs";
import { UpdateManyInscripcionArgs } from "./args/UpdateManyInscripcionArgs";
import { UpsertInscripcionArgs } from "./args/UpsertInscripcionArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Inscripcion } from "../../../models/Inscripcion";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateInscripcion } from "../../outputs/AggregateInscripcion";
import { InscripcionGroupBy } from "../../outputs/InscripcionGroupBy";

@TypeGraphQL.Resolver(_of => Inscripcion)
export class InscripcionCrudResolver {
  @TypeGraphQL.Query(_returns => Inscripcion, {
    nullable: true
  })
  async inscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueInscripcionArgs): Promise<Inscripcion | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Inscripcion, {
    nullable: true
  })
  async findFirstInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstInscripcionArgs): Promise<Inscripcion | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Inscripcion], {
    nullable: false
  })
  async inscripcions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyInscripcionArgs): Promise<Inscripcion[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Inscripcion, {
    nullable: false
  })
  async createInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateInscripcionArgs): Promise<Inscripcion> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyInscripcionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Inscripcion, {
    nullable: true
  })
  async deleteInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteInscripcionArgs): Promise<Inscripcion | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyInscripcionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyInscripcionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).inscripcion.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => AggregateInscripcion, {
    nullable: false
  })
  async aggregateInscripcion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInscripcionArgs): Promise<AggregateInscripcion> {
    return getPrismaFromContext(ctx).inscripcion.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
