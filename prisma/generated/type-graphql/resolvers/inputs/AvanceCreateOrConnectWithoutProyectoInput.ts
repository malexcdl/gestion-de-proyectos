import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvanceCreateWithoutProyectoInput } from "../inputs/AvanceCreateWithoutProyectoInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";

@TypeGraphQL.InputType("AvanceCreateOrConnectWithoutProyectoInput", {
  isAbstract: true
})
export class AvanceCreateOrConnectWithoutProyectoInput {
  @TypeGraphQL.Field(_type => AvanceWhereUniqueInput, {
    nullable: false
  })
  where!: AvanceWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvanceCreateWithoutProyectoInput, {
    nullable: false
  })
  create!: AvanceCreateWithoutProyectoInput;
}
