import * as TypeGraphQL from "type-graphql";

export enum AvanceScalarFieldEnum {
  id = "id",
  fecha = "fecha",
  descripcion = "descripcion",
  observaciones = "observaciones",
  proyectoId = "proyectoId",
  usuarioId = "usuarioId"
}
TypeGraphQL.registerEnumType(AvanceScalarFieldEnum, {
  name: "AvanceScalarFieldEnum",
  description: undefined,
});
