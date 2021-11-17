import * as TypeGraphQL from "type-graphql";

export enum Enum_TipoObjetivo {
  General = "General",
  Especifico = "Especifico"
}
TypeGraphQL.registerEnumType(Enum_TipoObjetivo, {
  name: "Enum_TipoObjetivo",
  description: undefined,
});
