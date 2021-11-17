import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InscripcionOrderByWithAggregationInput } from "../../../inputs/InscripcionOrderByWithAggregationInput";
import { InscripcionScalarWhereWithAggregatesInput } from "../../../inputs/InscripcionScalarWhereWithAggregatesInput";
import { InscripcionWhereInput } from "../../../inputs/InscripcionWhereInput";
import { InscripcionScalarFieldEnum } from "../../../../enums/InscripcionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInscripcionArgs {
  @TypeGraphQL.Field(_type => InscripcionWhereInput, {
    nullable: true
  })
  where?: InscripcionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InscripcionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: InscripcionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [InscripcionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "estado" | "fechaIngreso" | "fecjaEgreso" | "proyectoId" | "usuarioId">;

  @TypeGraphQL.Field(_type => InscripcionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InscripcionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
