import * as TypeGraphQL from "type-graphql";

export enum UsuarioScalarFieldEnum {
  id = "id",
  correo = "correo",
  nombre = "nombre",
  apellido = "apellido",
  identificacion = "identificacion",
  telefono = "telefono",
  rol = "rol",
  estado = "estado"
}
TypeGraphQL.registerEnumType(UsuarioScalarFieldEnum, {
  name: "UsuarioScalarFieldEnum",
  description: undefined,
});
