import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_FaseProyectoFilter } from "../inputs/NestedEnumEnum_FaseProyectoFilter";
import { Enum_FaseProyecto } from "../../enums/Enum_FaseProyecto";

@TypeGraphQL.InputType("EnumEnum_FaseProyectoFilter", {
  isAbstract: true
})
export class EnumEnum_FaseProyectoFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_FaseProyectoFilter | undefined;
}
