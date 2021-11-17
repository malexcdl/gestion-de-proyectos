import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProyectoCreateManyInput } from "../../../inputs/ProyectoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProyectoArgs {
  @TypeGraphQL.Field(_type => [ProyectoCreateManyInput], {
    nullable: false
  })
  data!: ProyectoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
