import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProyectoCreateNestedOneWithoutAvancesInput } from "../inputs/ProyectoCreateNestedOneWithoutAvancesInput";
import { UsuarioCreateNestedOneWithoutAvancesCreadosInput } from "../inputs/UsuarioCreateNestedOneWithoutAvancesCreadosInput";

@TypeGraphQL.InputType("AvanceCreateInput", {
  isAbstract: true
})
export class AvanceCreateInput {
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

  @TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutAvancesInput, {
    nullable: false
  })
  proyecto!: ProyectoCreateNestedOneWithoutAvancesInput;

  @TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutAvancesCreadosInput, {
    nullable: false
  })
  creadoPor!: UsuarioCreateNestedOneWithoutAvancesCreadosInput;
}
