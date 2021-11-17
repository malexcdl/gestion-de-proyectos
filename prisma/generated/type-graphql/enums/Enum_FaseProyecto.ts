import * as TypeGraphQL from "type-graphql";

export enum Enum_FaseProyecto {
  Iniciado = "Iniciado",
  Desarrollo = "Desarrollo",
  Terminado = "Terminado"
}
TypeGraphQL.registerEnumType(Enum_FaseProyecto, {
  name: "Enum_FaseProyecto",
  description: undefined,
});
