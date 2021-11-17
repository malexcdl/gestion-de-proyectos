import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_EstadoInscripcion } from "../../enums/Enum_EstadoInscripcion";

@TypeGraphQL.InputType("InscripcionCreateManyInput", {
  isAbstract: true
})
export class InscripcionCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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
}
