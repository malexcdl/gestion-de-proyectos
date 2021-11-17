import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvanceOrderByWithRelationInput } from "../../../inputs/AvanceOrderByWithRelationInput";
import { AvanceWhereInput } from "../../../inputs/AvanceWhereInput";
import { AvanceWhereUniqueInput } from "../../../inputs/AvanceWhereUniqueInput";
import { AvanceScalarFieldEnum } from "../../../../enums/AvanceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAvanceArgs {
  @TypeGraphQL.Field(_type => AvanceWhereInput, {
    nullable: true
  })
  where?: AvanceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AvanceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AvanceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AvanceWhereUniqueInput, {
    nullable: true
  })
  cursor?: AvanceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AvanceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "fecha" | "descripcion" | "observaciones" | "proyectoId" | "usuarioId"> | undefined;
}
