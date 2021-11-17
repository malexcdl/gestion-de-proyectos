import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ObjetivoCountAggregate } from "../outputs/ObjetivoCountAggregate";
import { ObjetivoMaxAggregate } from "../outputs/ObjetivoMaxAggregate";
import { ObjetivoMinAggregate } from "../outputs/ObjetivoMinAggregate";
import { Enum_TipoObjetivo } from "../../enums/Enum_TipoObjetivo";

@TypeGraphQL.ObjectType("ObjetivoGroupBy", {
  isAbstract: true
})
export class ObjetivoGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descripcion!: string;

  @TypeGraphQL.Field(_type => Enum_TipoObjetivo, {
    nullable: false
  })
  tipo!: "General" | "Especifico";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  proyectoId!: string;

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
