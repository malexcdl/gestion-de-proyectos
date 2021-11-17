import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateNestedManyWithoutProyectoInput } from "../inputs/AvanceCreateNestedManyWithoutProyectoInput";
import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { UsuarioCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput";
import { Enum_EstadoProyecto } from "../../enums/Enum_EstadoProyecto";
import { Enum_FaseProyecto } from "../../enums/Enum_FaseProyecto";

@TypeGraphQL.InputType("ProyectoCreateWithoutObjetivosInput", {
  isAbstract: true
})
export class ProyectoCreateWithoutObjetivosInput {
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

  @TypeGraphQL.Field(_type => AvanceCreateNestedManyWithoutProyectoInput, {
    nullable: true
  })
  avances?: AvanceCreateNestedManyWithoutProyectoInput | undefined;

  @TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutProyectoInput, {
    nullable: true
  })
  inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
}
