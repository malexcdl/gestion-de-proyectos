import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AvanceMinAggregate", {
  isAbstract: true
})
export class AvanceMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  fecha!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  descripcion!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  observaciones!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  proyectoId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  usuarioId!: string | null;
}
