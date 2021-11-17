import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEnum_RolFilter } from "../inputs/NestedEnumEnum_RolFilter";
import { Enum_Rol } from "../../enums/Enum_Rol";

@TypeGraphQL.InputType("EnumEnum_RolFilter", {
  isAbstract: true
})
export class EnumEnum_RolFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumEnum_RolFilter, {
    nullable: true
  })
  not?: NestedEnumEnum_RolFilter | undefined;
}
