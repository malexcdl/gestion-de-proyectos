import * as TypeGraphQL from "type-graphql";

export enum ObjetivoScalarFieldEnum {
  id = "id",
  descripcion = "descripcion",
  tipo = "tipo",
  proyectoId = "proyectoId"
}
TypeGraphQL.registerEnumType(ObjetivoScalarFieldEnum, {
  name: "ObjetivoScalarFieldEnum",
  description: undefined,
});
