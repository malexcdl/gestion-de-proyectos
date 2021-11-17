import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_EstadoInscripcionFilter } from "../inputs/EnumEnum_EstadoInscripcionFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("InscripcionScalarWhereInput", {
  isAbstract: true
})
export class InscripcionScalarWhereInput {
  @TypeGraphQL.Field(_type => [InscripcionScalarWhereInput], {
    nullable: true
  })
  AND?: InscripcionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionScalarWhereInput], {
    nullable: true
  })
  OR?: InscripcionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionScalarWhereInput], {
    nullable: true
  })
  NOT?: InscripcionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_EstadoInscripcionFilter, {
    nullable: true
  })
  estado?: EnumEnum_EstadoInscripcionFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  fechaIngreso?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  fecjaEgreso?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  proyectoId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  usuarioId?: StringFilter | undefined;
}
