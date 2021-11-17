import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("UsuarioWhereUniqueInput", {
  isAbstract: true
})
export class UsuarioWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  correo?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identificacion?: string | undefined;
}
