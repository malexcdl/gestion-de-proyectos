import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEnum_TipoObjetivoFilter } from "../inputs/EnumEnum_TipoObjetivoFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ObjetivoScalarWhereInput", {
  isAbstract: true
})
export class ObjetivoScalarWhereInput {
  @TypeGraphQL.Field(_type => [ObjetivoScalarWhereInput], {
    nullable: true
  })
  AND?: ObjetivoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoScalarWhereInput], {
    nullable: true
  })
  OR?: ObjetivoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ObjetivoScalarWhereInput], {
    nullable: true
  })
  NOT?: ObjetivoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  descripcion?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEnum_TipoObjetivoFilter, {
    nullable: true
  })
  tipo?: EnumEnum_TipoObjetivoFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  proyectoId?: StringFilter | undefined;
}
