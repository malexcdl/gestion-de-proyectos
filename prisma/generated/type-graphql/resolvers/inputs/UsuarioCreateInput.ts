import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateNestedManyWithoutCreadoPorInput } from "../inputs/AvanceCreateNestedManyWithoutCreadoPorInput";
import { InscripcionCreateNestedManyWithoutEstudianteInput } from "../inputs/InscripcionCreateNestedManyWithoutEstudianteInput";
import { ProyectoCreateNestedManyWithoutLiderInput } from "../inputs/ProyectoCreateNestedManyWithoutLiderInput";
import { Enum_EstadoUsuario } from "../../enums/Enum_EstadoUsuario";
import { Enum_Rol } from "../../enums/Enum_Rol";

@TypeGraphQL.InputType("UsuarioCreateInput", {
  isAbstract: true
})
export class UsuarioCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  correo!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  apellido!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identificacion!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telefono?: string | undefined;

  @TypeGraphQL.Field(_type => Enum_Rol, {
    nullable: false
  })
  rol!: "Estudiante" | "Lider" | "Administrador";

  @TypeGraphQL.Field(_type => Enum_EstadoUsuario, {
    nullable: false
  })
  estado!: "Pendiente" | "Autorizado" | "NoAutorizado";

  @TypeGraphQL.Field(_type => ProyectoCreateNestedManyWithoutLiderInput, {
    nullable: true
  })
  proyectosLiderados?: ProyectoCreateNestedManyWithoutLiderInput | undefined;

  @TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutCreadoPorInput, {
    nullable: true
  })
  avancesCreados?: AvanceCreateNestedManyWithoutCreadoPorInput | undefined;

  @TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutEstudianteInput, {
    nullable: true
  })
  inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput | undefined;
}
