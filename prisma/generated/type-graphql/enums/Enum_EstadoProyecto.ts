import * as TypeGraphQL from "type-graphql";

export enum Enum_EstadoProyecto {
  Activo = "Activo",
  Inactivo = "Inactivo"
}
TypeGraphQL.registerEnumType(Enum_EstadoProyecto, {
  name: "Enum_EstadoProyecto",
  description: undefined,
});
