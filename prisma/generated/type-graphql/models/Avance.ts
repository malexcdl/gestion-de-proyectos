import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Proyecto } from "../models/Proyecto";
import { Usuario } from "../models/Usuario";

@TypeGraphQL.ObjectType("Avance", {
  isAbstract: true
})
export class Avance {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  fecha!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  descripcion!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  observaciones!: string;

  proyecto?: Proyecto;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  proyectoId!: string;

  creadoPor?: Usuario;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioId!: string;
}
