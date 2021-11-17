import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCountAggregate } from "../outputs/InscripcionCountAggregate";
import { InscripcionMaxAggregate } from "../outputs/InscripcionMaxAggregate";
import { InscripcionMinAggregate } from "../outputs/InscripcionMinAggregate";

@TypeGraphQL.ObjectType("AggregateInscripcion", {
  isAbstract: true
})
export class AggregateInscripcion {
  @TypeGraphQL.Field(_type => InscripcionCountAggregate, {
    nullable: true
  })
  _count!: InscripcionCountAggregate | null;

  @TypeGraphQL.Field(_type => InscripcionMinAggregate, {
    nullable: true
  })
  _min!: InscripcionMinAggregate | null;

  @TypeGraphQL.Field(_type => InscripcionMaxAggregate, {
    nullable: true
  })
  _max!: InscripcionMaxAggregate | null;
}
