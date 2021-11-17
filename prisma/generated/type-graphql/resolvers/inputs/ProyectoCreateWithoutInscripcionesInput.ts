import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateNestedManyWithoutProyectoInput } from "../inputs/AvanceCreateNestedManyWithoutProyectoInput";
import { ObjetivoCreateNestedManyWithoutProyectoInput } from "../inputs/ObjetivoCreateNestedManyWithoutProyectoInput";
import { UsuarioCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput";
import { Enum_EstadoProyecto } from "../../enums/Enum_EstadoProyecto";
import { Enum_FaseProyecto } from "../../enums/Enum_FaseProyecto";

@TypeGraphQL.InputType("ProyectoCreateWithoutInscripcionesInput", {
  isAbstract: true
})
export class ProyectoCreateWithoutInscripcionesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nombre!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  presupuesto!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fechaInicio!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fechaFin!: Date;

  @TypeGraphQL.Field(_type => Enum_EstadoProyecto, {
    nullable: false
  })
  estado!: "Activo" | "Inactivo";

  @TypeGraphQL.Field(_type => Enum_FaseProyecto, {
    nullable: false
  })
  fase!: "Iniciado" | "Desarrollo" | "Terminado";

  @TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutProyectosLideradosInput, {
    nullable: false
  })
  lider!: UsuarioCreateNestedOneWithoutProyectosLideradosInput;

  @TypeGraphQL.Field(_type => ObjetivoCreateNestedManyWithoutProyectoInput, {
    nullable: true
  })
  objetivos?: ObjetivoCreateNestedManyWithoutProyectoInput | undefined;

  @TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutProyectoInput, {
    nullable: true
  })
  avances?: AvanceCreateNestedManyWithoutProyectoInput | undefined;
}
