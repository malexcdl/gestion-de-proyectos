import * as TypeGraphQL from "type-graphql";

export enum Enum_Rol {
  Estudiante = "Estudiante",
  Lider = "Lider",
  Administrador = "Administrador"
}
TypeGraphQL.registerEnumType(Enum_Rol, {
  name: "Enum_Rol",
  description: undefined,
});
