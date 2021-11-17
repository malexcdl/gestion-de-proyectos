import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Enum_TipoObjetivo } from "../../enums/Enum_TipoObjetivo";

@TypeGraphQL.ObjectType("ObjetivoMaxAggregate", {
  isAbstract: true
})
export class ObjetivoMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  descripcion!: string | null;

  @TypeGraphQL.Field(_type => Enum_TipoObjetivo, {
    nullable: true
  })
  tipo!: "General" | "Especifico" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  proyectoId!: string | null;
}
