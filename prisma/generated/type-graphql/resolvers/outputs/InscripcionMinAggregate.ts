import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_EstadoInscripcion } from "../../enums/Enum_EstadoInscripcion";

@TypeGraphQL.ObjectType("InscripcionMinAggregate", {
  isAbstract: true
})
export class InscripcionMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Enum_EstadoInscripcion, {
    nullable: true
  })
  estado!: "Aceptada" | "Rechazada" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  fechaIngreso!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  fecjaEgreso!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  proyectoId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  usuarioId!: string | null;
}
