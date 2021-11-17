import * as TypeGraphQL from "type-graphql";

export enum Enum_EstadoUsuario {
  Pendiente = "Pendiente",
  Autorizado = "Autorizado",
  NoAutorizado = "NoAutorizado"
}
TypeGraphQL.registerEnumType(Enum_EstadoUsuario, {
  name: "Enum_EstadoUsuario",
  description: undefined,
});
