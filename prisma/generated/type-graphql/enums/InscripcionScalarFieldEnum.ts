import * as TypeGraphQL from "type-graphql";

export enum InscripcionScalarFieldEnum {
  id = "id",
  estado = "estado",
  fechaIngreso = "fechaIngreso",
  fecjaEgreso = "fecjaEgreso",
  proyectoId = "proyectoId",
  usuarioId = "usuarioId"
}
TypeGraphQL.registerEnumType(InscripcionScalarFieldEnum, {
  name: "InscripcionScalarFieldEnum",
  description: undefined,
});
