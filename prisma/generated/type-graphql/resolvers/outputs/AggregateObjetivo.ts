import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoCountAggregate } from "../outputs/ObjetivoCountAggregate";
import { ObjetivoMaxAggregate } from "../outputs/ObjetivoMaxAggregate";
import { ObjetivoMinAggregate } from "../outputs/ObjetivoMinAggregate";

@TypeGraphQL.ObjectType("AggregateObjetivo", {
  isAbstract: true
})
export class AggregateObjetivo {
  @TypeGraphQL.Field(_type => ObjetivoCountAggregate, {
    nullable: true
  })
  _count!: ObjetivoCountAggregate | null;

  @TypeGraphQL.Field(_type => ObjetivoMinAggregate, {
    nullable: true
  })
  _min!: ObjetivoMinAggregate | null;

  @TypeGraphQL.Field(_type => ObjetivoMaxAggregate, {
    nullable: true
  })
  _max!: ObjetivoMaxAggregate | null;
}
