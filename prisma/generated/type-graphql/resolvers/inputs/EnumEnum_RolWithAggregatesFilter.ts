import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_RolFilter } from "../inputs/NestedEnumEnum_RolFilter";
import { NestedEnumEnum_RolWithAggregatesFilter } from "../inputs/NestedEnumEnum_RolWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Enum_Rol } from "../../enums/Enum_Rol";

@TypeGraphQL.InputType("EnumEnum_RolWithAggregatesFilter", {
  isAbstract: true
})
export class EnumEnum_RolWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Enum_Rol, {
    nullable: true
  })
  equals?: "Estudiante" | "Lider" | "Administrador" | undefined;

  @TypeGraphQL.Field(_type => [Enum_Rol], {
    nullable: true
  })
  in?: Array<"Estudiante" | "Lider" | "Administrador"> | undefined;

  @TypeGraphQL.Field(_type => [Enum_Rol], {
    nullable: true
  })
  notIn?: Array<"Estudiante" | "Lider" | "Administrador"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_RolWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_RolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_RolFilter, {
    nullable: true
  })
  _min?: NestedEnumEnum_RolFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumEnum_RolFilter, {
    nullable: true
  })
  _max?: NestedEnumEnum_RolFilter | undefined;
}
