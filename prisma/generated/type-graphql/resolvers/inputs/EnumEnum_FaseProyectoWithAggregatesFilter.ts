import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_FaseProyectoFilter } from "../inputs/NestedEnumEnum_FaseProyectoFilter";
import { NestedEnumEnum_FaseProyectoWithAggregatesFilter } from "../inputs/NestedEnumEnum_FaseProyectoWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Enum_FaseProyecto } from "../../enums/Enum_FaseProyecto";

@TypeGraphQL.InputType("EnumEnum_FaseProyectoWithAggregatesFilter", {
  isAbstract: true
})
export class EnumEnum_FaseProyectoWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Enum_FaseProyecto, {
    nullable: true
  })
  equals?: "Iniciado" | "Desarrollo" | "Terminado" | undefined;

  @TypeGraphQL.Field(_type => [Enum_FaseProyecto], {
    nullable: true
  })
  in?: Array<"Iniciado" | "Desarrollo" | "Terminado"> | undefined;

  @TypeGraphQL.Field(_type => [Enum_FaseProyecto], {
    nullable: true
  })
  notIn?: Array<"Iniciado" | "Desarrollo" | "Terminado"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_FaseProyectoWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoFilter, {
    nullable: true
  })
  _min?: NestedEnumEnum_FaseProyectoFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoFilter, {
    nullable: true
  })
  _max?: NestedEnumEnum_FaseProyectoFilter | undefined;
}
