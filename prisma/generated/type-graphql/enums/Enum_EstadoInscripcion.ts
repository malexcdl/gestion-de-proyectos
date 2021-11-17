import * as TypeGraphQL from "type-graphql";

export enum Enum_EstadoInscripcion {
  Aceptada = "Aceptada",
  Rechazada = "Rechazada"
}
TypeGraphQL.registerEnumType(Enum_EstadoInscripcion, {
  name: "Enum_EstadoInscripcion",
  description: undefined,
});
