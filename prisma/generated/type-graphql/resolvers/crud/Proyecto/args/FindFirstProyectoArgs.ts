import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProyectoOrderByWithRelationInput } from "../../../inputs/ProyectoOrderByWithRelationInput";
import { ProyectoWhereInput } from "../../../inputs/ProyectoWhereInput";
import { ProyectoWhereUniqueInput } from "../../../inputs/ProyectoWhereUniqueInput";
import { ProyectoScalarFieldEnum } from "../../../../enums/ProyectoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProyectoArgs {
  @TypeGraphQL.Field(_type => ProyectoWhereInput, {
    nullable: true
  })
  where?: ProyectoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProyectoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProyectoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProyectoWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProyectoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProyectoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "nombre" | "presupuesto" | "fechaInicio" | "fechaFin" | "usuarioId" | "estado" | "fase"> | undefined;
}
