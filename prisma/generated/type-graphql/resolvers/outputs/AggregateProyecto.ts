import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoAvgAggregate } from "../outputs/ProyectoAvgAggregate";
import { ProyectoCountAggregate } from "../outputs/ProyectoCountAggregate";
import { ProyectoMaxAggregate } from "../outputs/ProyectoMaxAggregate";
import { ProyectoMinAggregate } from "../outputs/ProyectoMinAggregate";
import { ProyectoSumAggregate } from "../outputs/ProyectoSumAggregate";

@TypeGraphQL.ObjectType("AggregateProyecto", {
  isAbstract: true
})
export class AggregateProyecto {
  @TypeGraphQL.Field(_type => ProyectoCountAggregate, {
    nullable: true
  })
  _count!: ProyectoCountAggregate | null;

  @TypeGraphQL.Field(_type => ProyectoAvgAggregate, {
    nullable: true
  })
  _avg!: ProyectoAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProyectoSumAggregate, {
    nullable: true
  })
  _sum!: ProyectoSumAggregate | null;

  @TypeGraphQL.Field(_type => ProyectoMinAggregate, {
    nullable: true
  })
  _min!: ProyectoMinAggregate | null;

  @TypeGraphQL.Field(_type => ProyectoMaxAggregate, {
    nullable: true
  })
  _max!: ProyectoMaxAggregate | null;
}
