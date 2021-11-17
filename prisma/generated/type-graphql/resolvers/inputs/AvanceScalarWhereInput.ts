import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AvanceScalarWhereInput", {
  isAbstract: true
})
export class AvanceScalarWhereInput {
  @TypeGraphQL.Field(_type => [AvanceScalarWhereInput], {
    nullable: true
  })
  AND?: AvanceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceScalarWhereInput], {
    nullable: true
  })
  OR?: AvanceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvanceScalarWhereInput], {
    nullable: true
  })
  NOT?: AvanceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  fecha?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  descripcion?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  observaciones?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  proyectoId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  usuarioId?: StringFilter | undefined;
}
