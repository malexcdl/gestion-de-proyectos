import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InscripcionOrderByWithRelationInput } from "../../../inputs/InscripcionOrderByWithRelationInput";
import { InscripcionWhereInput } from "../../../inputs/InscripcionWhereInput";
import { InscripcionWhereUniqueInput } from "../../../inputs/InscripcionWhereUniqueInput";
import { InscripcionScalarFieldEnum } from "../../../../enums/InscripcionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UsuarioInscripcionesArgs {
  @TypeGraphQL.Field(_type => InscripcionWhereInput, {
    nullable: true
  })
  where?: InscripcionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InscripcionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: InscripcionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => InscripcionWhereUniqueInput, {
    nullable: true
  })
  cursor?: InscripcionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [InscripcionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "estado" | "fechaIngreso" | "fecjaEgreso" | "proyectoId" | "usuarioId"> | undefined;
}
