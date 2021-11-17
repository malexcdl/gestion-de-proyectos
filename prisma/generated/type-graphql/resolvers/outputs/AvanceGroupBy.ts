import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCountAggregate } from "../outputs/AvanceCountAggregate";
import { AvanceMaxAggregate } from "../outputs/AvanceMaxAggregate";
import { AvanceMinAggregate } from "../outputs/AvanceMinAggregate";

@TypeGraphQL.ObjectType("AvanceGroupBy", {
  isAbstract: true
})
export class AvanceGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fecha!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descripcion!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  observaciones!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  proyectoId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioId!: string;

  @TypeGraphQL.Field(_type => AvanceCountAggregate, {
    nullable: true
  })
  _count!: AvanceCountAggregate | null;

  @TypeGraphQL.Field(_type => AvanceMinAggregate, {
    nullable: true
  })
  _min!: AvanceMinAggregate | null;

  @TypeGraphQL.Field(_type => AvanceMaxAggregate, {
    nullable: true
  })
  _max!: AvanceMaxAggregate | null;
}
