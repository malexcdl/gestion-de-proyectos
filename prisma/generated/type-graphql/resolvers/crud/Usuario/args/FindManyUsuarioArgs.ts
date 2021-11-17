import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuarioOrderByWithRelationInput } from "../../../inputs/UsuarioOrderByWithRelationInput";
import { UsuarioWhereInput } from "../../../inputs/UsuarioWhereInput";
import { UsuarioWhereUniqueInput } from "../../../inputs/UsuarioWhereUniqueInput";
import { UsuarioScalarFieldEnum } from "../../../../enums/UsuarioScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUsuarioArgs {
  @TypeGraphQL.Field(_type => UsuarioWhereInput, {
    nullable: true
  })
  where?: UsuarioWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsuarioOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UsuarioOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UsuarioWhereUniqueInput, {
    nullable: true
  })
  cursor?: UsuarioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UsuarioScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "correo" | "nombre" | "apellido" | "identificacion" | "telefono" | "rol" | "estado"> | undefined;
}
