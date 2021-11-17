import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AvanceCreateManyInput", {
  isAbstract: true
})
export class AvanceCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  proyectoId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  usuarioId!: string;
}
