import * as TypeGraphQL from "type-graphql";

export enum ProyectoScalarFieldEnum {
  id = "id",
  nombre = "nombre",
  presupuesto = "presupuesto",
  fechaInicio = "fechaInicio",
  fechaFin = "fechaFin",
  usuarioId = "usuarioId",
  estado = "estado",
  fase = "fase"
}
TypeGraphQL.registerEnumType(ProyectoScalarFieldEnum, {
  name: "ProyectoScalarFieldEnum",
  description: undefined,
});
