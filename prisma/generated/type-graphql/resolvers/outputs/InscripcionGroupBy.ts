import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InscripcionCountAggregate } from "../outputs/InscripcionCountAggregate";
import { InscripcionMaxAggregate } from "../outputs/InscripcionMaxAggregate";
import { InscripcionMinAggregate } from "../outputs/InscripcionMinAggregate";
import { Enum_EstadoInscripcion } from "../../enums/Enum_EstadoInscripcion";

@TypeGraphQL.ObjectType("InscripcionGroupBy", {
  isAbstract: true
})
export class InscripcionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Enum_EstadoInscripcion, {
    nullable: false
  })
  estado!: "Aceptada" | "Rechazada";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fechaIngreso!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fecjaEgreso!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  proyectoId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioId!: string;

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
