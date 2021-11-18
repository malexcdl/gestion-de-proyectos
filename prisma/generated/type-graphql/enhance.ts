import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Usuario: crudResolvers.UsuarioCrudResolver,
  Proyecto: crudResolvers.ProyectoCrudResolver,
  Objetivo: crudResolvers.ObjetivoCrudResolver,
  Avance: crudResolvers.AvanceCrudResolver,
  Inscripcion: crudResolvers.InscripcionCrudResolver
};
const actionResolversMap = {
  Usuario: {
    usuario: actionResolvers.FindUniqueUsuarioResolver,
    findFirstUsuario: actionResolvers.FindFirstUsuarioResolver,
    usuarios: actionResolvers.FindManyUsuarioResolver,
    createUsuario: actionResolvers.CreateUsuarioResolver,
    createManyUsuario: actionResolvers.CreateManyUsuarioResolver,
    deleteUsuario: actionResolvers.DeleteUsuarioResolver,
    updateUsuario: actionResolvers.UpdateUsuarioResolver,
    deleteManyUsuario: actionResolvers.DeleteManyUsuarioResolver,
    updateManyUsuario: actionResolvers.UpdateManyUsuarioResolver,
    upsertUsuario: actionResolvers.UpsertUsuarioResolver,
    aggregateUsuario: actionResolvers.AggregateUsuarioResolver,
    groupByUsuario: actionResolvers.GroupByUsuarioResolver
  },
  Proyecto: {
    proyecto: actionResolvers.FindUniqueProyectoResolver,
    findFirstProyecto: actionResolvers.FindFirstProyectoResolver,
    proyectos: actionResolvers.FindManyProyectoResolver,
    createProyecto: actionResolvers.CreateProyectoResolver,
    createManyProyecto: actionResolvers.CreateManyProyectoResolver,
    deleteProyecto: actionResolvers.DeleteProyectoResolver,
    updateProyecto: actionResolvers.UpdateProyectoResolver,
    deleteManyProyecto: actionResolvers.DeleteManyProyectoResolver,
    updateManyProyecto: actionResolvers.UpdateManyProyectoResolver,
    upsertProyecto: actionResolvers.UpsertProyectoResolver,
    aggregateProyecto: actionResolvers.AggregateProyectoResolver,
    groupByProyecto: actionResolvers.GroupByProyectoResolver
  },
  Objetivo: {
    objetivo: actionResolvers.FindUniqueObjetivoResolver,
    findFirstObjetivo: actionResolvers.FindFirstObjetivoResolver,
    objetivos: actionResolvers.FindManyObjetivoResolver,
    createObjetivo: actionResolvers.CreateObjetivoResolver,
    createManyObjetivo: actionResolvers.CreateManyObjetivoResolver,
    deleteObjetivo: actionResolvers.DeleteObjetivoResolver,
    updateObjetivo: actionResolvers.UpdateObjetivoResolver,
    deleteManyObjetivo: actionResolvers.DeleteManyObjetivoResolver,
    updateManyObjetivo: actionResolvers.UpdateManyObjetivoResolver,
    upsertObjetivo: actionResolvers.UpsertObjetivoResolver,
    aggregateObjetivo: actionResolvers.AggregateObjetivoResolver,
    groupByObjetivo: actionResolvers.GroupByObjetivoResolver
  },
  Avance: {
    avance: actionResolvers.FindUniqueAvanceResolver,
    findFirstAvance: actionResolvers.FindFirstAvanceResolver,
    avances: actionResolvers.FindManyAvanceResolver,
    createAvance: actionResolvers.CreateAvanceResolver,
    createManyAvance: actionResolvers.CreateManyAvanceResolver,
    deleteAvance: actionResolvers.DeleteAvanceResolver,
    updateAvance: actionResolvers.UpdateAvanceResolver,
    deleteManyAvance: actionResolvers.DeleteManyAvanceResolver,
    updateManyAvance: actionResolvers.UpdateManyAvanceResolver,
    upsertAvance: actionResolvers.UpsertAvanceResolver,
    aggregateAvance: actionResolvers.AggregateAvanceResolver,
    groupByAvance: actionResolvers.GroupByAvanceResolver
  },
  Inscripcion: {
    inscripcion: actionResolvers.FindUniqueInscripcionResolver,
    findFirstInscripcion: actionResolvers.FindFirstInscripcionResolver,
    inscripcions: actionResolvers.FindManyInscripcionResolver,
    createInscripcion: actionResolvers.CreateInscripcionResolver,
    createManyInscripcion: actionResolvers.CreateManyInscripcionResolver,
    deleteInscripcion: actionResolvers.DeleteInscripcionResolver,
    updateInscripcion: actionResolvers.UpdateInscripcionResolver,
    deleteManyInscripcion: actionResolvers.DeleteManyInscripcionResolver,
    updateManyInscripcion: actionResolvers.UpdateManyInscripcionResolver,
    upsertInscripcion: actionResolvers.UpsertInscripcionResolver,
    aggregateInscripcion: actionResolvers.AggregateInscripcionResolver,
    groupByInscripcion: actionResolvers.GroupByInscripcionResolver
  }
};
const crudResolversInfo = {
  Usuario: ["usuario", "findFirstUsuario", "usuarios", "createUsuario", "createManyUsuario", "deleteUsuario", "updateUsuario", "deleteManyUsuario", "updateManyUsuario", "upsertUsuario", "aggregateUsuario", "groupByUsuario"],
  Proyecto: ["proyecto", "findFirstProyecto", "proyectos", "createProyecto", "createManyProyecto", "deleteProyecto", "updateProyecto", "deleteManyProyecto", "updateManyProyecto", "upsertProyecto", "aggregateProyecto", "groupByProyecto"],
  Objetivo: ["objetivo", "findFirstObjetivo", "objetivos", "createObjetivo", "createManyObjetivo", "deleteObjetivo", "updateObjetivo", "deleteManyObjetivo", "updateManyObjetivo", "upsertObjetivo", "aggregateObjetivo", "groupByObjetivo"],
  Avance: ["avance", "findFirstAvance", "avances", "createAvance", "createManyAvance", "deleteAvance", "updateAvance", "deleteManyAvance", "updateManyAvance", "upsertAvance", "aggregateAvance", "groupByAvance"],
  Inscripcion: ["inscripcion", "findFirstInscripcion", "inscripcions", "createInscripcion", "createManyInscripcion", "deleteInscripcion", "updateInscripcion", "deleteManyInscripcion", "updateManyInscripcion", "upsertInscripcion", "aggregateInscripcion", "groupByInscripcion"]
};
const argsInfo = {
  FindUniqueUsuarioArgs: ["where"],
  FindFirstUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUsuarioArgs: ["data"],
  CreateManyUsuarioArgs: ["data", "skipDuplicates"],
  DeleteUsuarioArgs: ["where"],
  UpdateUsuarioArgs: ["data", "where"],
  DeleteManyUsuarioArgs: ["where"],
  UpdateManyUsuarioArgs: ["data", "where"],
  UpsertUsuarioArgs: ["where", "create", "update"],
  AggregateUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUsuarioArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProyectoArgs: ["where"],
  FindFirstProyectoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProyectoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProyectoArgs: ["data"],
  CreateManyProyectoArgs: ["data", "skipDuplicates"],
  DeleteProyectoArgs: ["where"],
  UpdateProyectoArgs: ["data", "where"],
  DeleteManyProyectoArgs: ["where"],
  UpdateManyProyectoArgs: ["data", "where"],
  UpsertProyectoArgs: ["where", "create", "update"],
  AggregateProyectoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProyectoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueObjetivoArgs: ["where"],
  FindFirstObjetivoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyObjetivoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateObjetivoArgs: ["data"],
  CreateManyObjetivoArgs: ["data", "skipDuplicates"],
  DeleteObjetivoArgs: ["where"],
  UpdateObjetivoArgs: ["data", "where"],
  DeleteManyObjetivoArgs: ["where"],
  UpdateManyObjetivoArgs: ["data", "where"],
  UpsertObjetivoArgs: ["where", "create", "update"],
  AggregateObjetivoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByObjetivoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAvanceArgs: ["where"],
  FindFirstAvanceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAvanceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAvanceArgs: ["data"],
  CreateManyAvanceArgs: ["data", "skipDuplicates"],
  DeleteAvanceArgs: ["where"],
  UpdateAvanceArgs: ["data", "where"],
  DeleteManyAvanceArgs: ["where"],
  UpdateManyAvanceArgs: ["data", "where"],
  UpsertAvanceArgs: ["where", "create", "update"],
  AggregateAvanceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAvanceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueInscripcionArgs: ["where"],
  FindFirstInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateInscripcionArgs: ["data"],
  CreateManyInscripcionArgs: ["data", "skipDuplicates"],
  DeleteInscripcionArgs: ["where"],
  UpdateInscripcionArgs: ["data", "where"],
  DeleteManyInscripcionArgs: ["where"],
  UpdateManyInscripcionArgs: ["data", "where"],
  UpsertInscripcionArgs: ["where", "create", "update"],
  AggregateInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByInscripcionArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Usuario: relationResolvers.UsuarioRelationsResolver,
  Proyecto: relationResolvers.ProyectoRelationsResolver,
  Objetivo: relationResolvers.ObjetivoRelationsResolver,
  Avance: relationResolvers.AvanceRelationsResolver,
  Inscripcion: relationResolvers.InscripcionRelationsResolver
};
const relationResolversInfo = {
  Usuario: ["proyectosLiderados", "avancesCreados", "inscripciones"],
  Proyecto: ["lider", "objetivos", "avances", "inscripciones"],
  Objetivo: ["proyecto"],
  Avance: ["proyecto", "creadoPor"],
  Inscripcion: ["proyecto", "estudiante"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

const modelsInfo = {
  Usuario: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado"],
  Proyecto: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
  Objetivo: ["id", "descripcion", "tipo", "proyectoId"],
  Avance: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
  Inscripcion: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUsuario: ["_count", "_min", "_max"],
  UsuarioGroupBy: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "_count", "_min", "_max"],
  AggregateProyecto: ["_count", "_avg", "_sum", "_min", "_max"],
  ProyectoGroupBy: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateObjetivo: ["_count", "_min", "_max"],
  ObjetivoGroupBy: ["id", "descripcion", "tipo", "proyectoId", "_count", "_min", "_max"],
  AggregateAvance: ["_count", "_min", "_max"],
  AvanceGroupBy: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId", "_count", "_min", "_max"],
  AggregateInscripcion: ["_count", "_min", "_max"],
  InscripcionGroupBy: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UsuarioCount: ["proyectosLiderados", "avancesCreados", "inscripciones"],
  UsuarioCountAggregate: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "_all"],
  UsuarioMinAggregate: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado"],
  UsuarioMaxAggregate: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado"],
  ProyectoCount: ["objetivos", "avances", "inscripciones"],
  ProyectoCountAggregate: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase", "_all"],
  ProyectoAvgAggregate: ["presupuesto"],
  ProyectoSumAggregate: ["presupuesto"],
  ProyectoMinAggregate: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
  ProyectoMaxAggregate: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
  ObjetivoCountAggregate: ["id", "descripcion", "tipo", "proyectoId", "_all"],
  ObjetivoMinAggregate: ["id", "descripcion", "tipo", "proyectoId"],
  ObjetivoMaxAggregate: ["id", "descripcion", "tipo", "proyectoId"],
  AvanceCountAggregate: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId", "_all"],
  AvanceMinAggregate: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
  AvanceMaxAggregate: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
  InscripcionCountAggregate: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId", "_all"],
  InscripcionMinAggregate: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId"],
  InscripcionMaxAggregate: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UsuarioWhereInput: ["AND", "OR", "NOT", "id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones"],
  UsuarioOrderByWithRelationInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones"],
  UsuarioWhereUniqueInput: ["id", "correo", "identificacion"],
  UsuarioOrderByWithAggregationInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "_count", "_max", "_min"],
  UsuarioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado"],
  ProyectoWhereInput: ["AND", "OR", "NOT", "id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "lider", "usuarioId", "estado", "fase", "objetivos", "avances", "inscripciones"],
  ProyectoOrderByWithRelationInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "lider", "usuarioId", "estado", "fase", "objetivos", "avances", "inscripciones"],
  ProyectoWhereUniqueInput: ["id"],
  ProyectoOrderByWithAggregationInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase", "_count", "_avg", "_max", "_min", "_sum"],
  ProyectoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
  ObjetivoWhereInput: ["AND", "OR", "NOT", "id", "descripcion", "tipo", "proyecto", "proyectoId"],
  ObjetivoOrderByWithRelationInput: ["id", "descripcion", "tipo", "proyecto", "proyectoId"],
  ObjetivoWhereUniqueInput: ["id"],
  ObjetivoOrderByWithAggregationInput: ["id", "descripcion", "tipo", "proyectoId", "_count", "_max", "_min"],
  ObjetivoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "descripcion", "tipo", "proyectoId"],
  AvanceWhereInput: ["AND", "OR", "NOT", "id", "fecha", "descripcion", "observaciones", "proyecto", "proyectoId", "creadoPor", "usuarioId"],
  AvanceOrderByWithRelationInput: ["id", "fecha", "descripcion", "observaciones", "proyecto", "proyectoId", "creadoPor", "usuarioId"],
  AvanceWhereUniqueInput: ["id"],
  AvanceOrderByWithAggregationInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId", "_count", "_max", "_min"],
  AvanceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
  InscripcionWhereInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "fecjaEgreso", "proyecto", "proyectoId", "estudiante", "usuarioId"],
  InscripcionOrderByWithRelationInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyecto", "proyectoId", "estudiante", "usuarioId"],
  InscripcionWhereUniqueInput: ["id"],
  InscripcionOrderByWithAggregationInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId", "_count", "_max", "_min"],
  InscripcionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId"],
  UsuarioCreateInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones"],
  UsuarioUpdateInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados", "inscripciones"],
  UsuarioCreateManyInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado"],
  UsuarioUpdateManyMutationInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado"],
  ProyectoCreateInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "avances", "inscripciones"],
  ProyectoUpdateInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "avances", "inscripciones"],
  ProyectoCreateManyInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
  ProyectoUpdateManyMutationInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase"],
  ObjetivoCreateInput: ["id", "descripcion", "tipo", "proyecto"],
  ObjetivoUpdateInput: ["id", "descripcion", "tipo", "proyecto"],
  ObjetivoCreateManyInput: ["id", "descripcion", "tipo", "proyectoId"],
  ObjetivoUpdateManyMutationInput: ["id", "descripcion", "tipo"],
  AvanceCreateInput: ["id", "fecha", "descripcion", "observaciones", "proyecto", "creadoPor"],
  AvanceUpdateInput: ["id", "fecha", "descripcion", "observaciones", "proyecto", "creadoPor"],
  AvanceCreateManyInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
  AvanceUpdateManyMutationInput: ["id", "fecha", "descripcion", "observaciones"],
  InscripcionCreateInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyecto", "estudiante"],
  InscripcionUpdateInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyecto", "estudiante"],
  InscripcionCreateManyInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId"],
  InscripcionUpdateManyMutationInput: ["id", "estado", "fechaIngreso", "fecjaEgreso"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumEnum_RolFilter: ["equals", "in", "notIn", "not"],
  EnumEnum_EstadoUsuarioFilter: ["equals", "in", "notIn", "not"],
  ProyectoListRelationFilter: ["every", "some", "none"],
  AvanceListRelationFilter: ["every", "some", "none"],
  InscripcionListRelationFilter: ["every", "some", "none"],
  ProyectoOrderByRelationAggregateInput: ["_count"],
  AvanceOrderByRelationAggregateInput: ["_count"],
  InscripcionOrderByRelationAggregateInput: ["_count"],
  UsuarioCountOrderByAggregateInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado"],
  UsuarioMaxOrderByAggregateInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado"],
  UsuarioMinOrderByAggregateInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumEnum_RolWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumEnum_EstadoUsuarioWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UsuarioRelationFilter: ["is", "isNot"],
  EnumEnum_EstadoProyectoFilter: ["equals", "in", "notIn", "not"],
  EnumEnum_FaseProyectoFilter: ["equals", "in", "notIn", "not"],
  ObjetivoListRelationFilter: ["every", "some", "none"],
  ObjetivoOrderByRelationAggregateInput: ["_count"],
  ProyectoCountOrderByAggregateInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
  ProyectoAvgOrderByAggregateInput: ["presupuesto"],
  ProyectoMaxOrderByAggregateInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
  ProyectoMinOrderByAggregateInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
  ProyectoSumOrderByAggregateInput: ["presupuesto"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumEnum_EstadoProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumEnum_FaseProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumEnum_TipoObjetivoFilter: ["equals", "in", "notIn", "not"],
  ProyectoRelationFilter: ["is", "isNot"],
  ObjetivoCountOrderByAggregateInput: ["id", "descripcion", "tipo", "proyectoId"],
  ObjetivoMaxOrderByAggregateInput: ["id", "descripcion", "tipo", "proyectoId"],
  ObjetivoMinOrderByAggregateInput: ["id", "descripcion", "tipo", "proyectoId"],
  EnumEnum_TipoObjetivoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  AvanceCountOrderByAggregateInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
  AvanceMaxOrderByAggregateInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
  AvanceMinOrderByAggregateInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
  EnumEnum_EstadoInscripcionFilter: ["equals", "in", "notIn", "not"],
  InscripcionCountOrderByAggregateInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId"],
  InscripcionMaxOrderByAggregateInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId"],
  InscripcionMinOrderByAggregateInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId"],
  EnumEnum_EstadoInscripcionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProyectoCreateNestedManyWithoutLiderInput: ["create", "connectOrCreate", "createMany", "connect"],
  AvanceCreateNestedManyWithoutCreadoPorInput: ["create", "connectOrCreate", "createMany", "connect"],
  InscripcionCreateNestedManyWithoutEstudianteInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumEnum_RolFieldUpdateOperationsInput: ["set"],
  EnumEnum_EstadoUsuarioFieldUpdateOperationsInput: ["set"],
  ProyectoUpdateManyWithoutLiderInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AvanceUpdateManyWithoutCreadoPorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InscripcionUpdateManyWithoutEstudianteInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UsuarioCreateNestedOneWithoutProyectosLideradosInput: ["create", "connectOrCreate", "connect"],
  ObjetivoCreateNestedManyWithoutProyectoInput: ["create", "connectOrCreate", "createMany", "connect"],
  AvanceCreateNestedManyWithoutProyectoInput: ["create", "connectOrCreate", "createMany", "connect"],
  InscripcionCreateNestedManyWithoutProyectoInput: ["create", "connectOrCreate", "createMany", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  EnumEnum_EstadoProyectoFieldUpdateOperationsInput: ["set"],
  EnumEnum_FaseProyectoFieldUpdateOperationsInput: ["set"],
  UsuarioUpdateOneRequiredWithoutProyectosLideradosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ObjetivoUpdateManyWithoutProyectoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AvanceUpdateManyWithoutProyectoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InscripcionUpdateManyWithoutProyectoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProyectoCreateNestedOneWithoutObjetivosInput: ["create", "connectOrCreate", "connect"],
  EnumEnum_TipoObjetivoFieldUpdateOperationsInput: ["set"],
  ProyectoUpdateOneRequiredWithoutObjetivosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProyectoCreateNestedOneWithoutAvancesInput: ["create", "connectOrCreate", "connect"],
  UsuarioCreateNestedOneWithoutAvancesCreadosInput: ["create", "connectOrCreate", "connect"],
  ProyectoUpdateOneRequiredWithoutAvancesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UsuarioUpdateOneRequiredWithoutAvancesCreadosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProyectoCreateNestedOneWithoutInscripcionesInput: ["create", "connectOrCreate", "connect"],
  UsuarioCreateNestedOneWithoutInscripcionesInput: ["create", "connectOrCreate", "connect"],
  EnumEnum_EstadoInscripcionFieldUpdateOperationsInput: ["set"],
  ProyectoUpdateOneRequiredWithoutInscripcionesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UsuarioUpdateOneRequiredWithoutInscripcionesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumEnum_RolFilter: ["equals", "in", "notIn", "not"],
  NestedEnumEnum_EstadoUsuarioFilter: ["equals", "in", "notIn", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumEnum_RolWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumEnum_EstadoUsuarioWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumEnum_EstadoProyectoFilter: ["equals", "in", "notIn", "not"],
  NestedEnumEnum_FaseProyectoFilter: ["equals", "in", "notIn", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumEnum_EstadoProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumEnum_FaseProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumEnum_TipoObjetivoFilter: ["equals", "in", "notIn", "not"],
  NestedEnumEnum_TipoObjetivoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumEnum_EstadoInscripcionFilter: ["equals", "in", "notIn", "not"],
  NestedEnumEnum_EstadoInscripcionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProyectoCreateWithoutLiderInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "objetivos", "avances", "inscripciones"],
  ProyectoCreateOrConnectWithoutLiderInput: ["where", "create"],
  ProyectoCreateManyLiderInputEnvelope: ["data", "skipDuplicates"],
  AvanceCreateWithoutCreadoPorInput: ["id", "fecha", "descripcion", "observaciones", "proyecto"],
  AvanceCreateOrConnectWithoutCreadoPorInput: ["where", "create"],
  AvanceCreateManyCreadoPorInputEnvelope: ["data", "skipDuplicates"],
  InscripcionCreateWithoutEstudianteInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyecto"],
  InscripcionCreateOrConnectWithoutEstudianteInput: ["where", "create"],
  InscripcionCreateManyEstudianteInputEnvelope: ["data", "skipDuplicates"],
  ProyectoUpsertWithWhereUniqueWithoutLiderInput: ["where", "update", "create"],
  ProyectoUpdateWithWhereUniqueWithoutLiderInput: ["where", "data"],
  ProyectoUpdateManyWithWhereWithoutLiderInput: ["where", "data"],
  ProyectoScalarWhereInput: ["AND", "OR", "NOT", "id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "usuarioId", "estado", "fase"],
  AvanceUpsertWithWhereUniqueWithoutCreadoPorInput: ["where", "update", "create"],
  AvanceUpdateWithWhereUniqueWithoutCreadoPorInput: ["where", "data"],
  AvanceUpdateManyWithWhereWithoutCreadoPorInput: ["where", "data"],
  AvanceScalarWhereInput: ["AND", "OR", "NOT", "id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
  InscripcionUpsertWithWhereUniqueWithoutEstudianteInput: ["where", "update", "create"],
  InscripcionUpdateWithWhereUniqueWithoutEstudianteInput: ["where", "data"],
  InscripcionUpdateManyWithWhereWithoutEstudianteInput: ["where", "data"],
  InscripcionScalarWhereInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId", "usuarioId"],
  UsuarioCreateWithoutProyectosLideradosInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "avancesCreados", "inscripciones"],
  UsuarioCreateOrConnectWithoutProyectosLideradosInput: ["where", "create"],
  ObjetivoCreateWithoutProyectoInput: ["id", "descripcion", "tipo"],
  ObjetivoCreateOrConnectWithoutProyectoInput: ["where", "create"],
  ObjetivoCreateManyProyectoInputEnvelope: ["data", "skipDuplicates"],
  AvanceCreateWithoutProyectoInput: ["id", "fecha", "descripcion", "observaciones", "creadoPor"],
  AvanceCreateOrConnectWithoutProyectoInput: ["where", "create"],
  AvanceCreateManyProyectoInputEnvelope: ["data", "skipDuplicates"],
  InscripcionCreateWithoutProyectoInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "estudiante"],
  InscripcionCreateOrConnectWithoutProyectoInput: ["where", "create"],
  InscripcionCreateManyProyectoInputEnvelope: ["data", "skipDuplicates"],
  UsuarioUpsertWithoutProyectosLideradosInput: ["update", "create"],
  UsuarioUpdateWithoutProyectosLideradosInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "avancesCreados", "inscripciones"],
  ObjetivoUpsertWithWhereUniqueWithoutProyectoInput: ["where", "update", "create"],
  ObjetivoUpdateWithWhereUniqueWithoutProyectoInput: ["where", "data"],
  ObjetivoUpdateManyWithWhereWithoutProyectoInput: ["where", "data"],
  ObjetivoScalarWhereInput: ["AND", "OR", "NOT", "id", "descripcion", "tipo", "proyectoId"],
  AvanceUpsertWithWhereUniqueWithoutProyectoInput: ["where", "update", "create"],
  AvanceUpdateWithWhereUniqueWithoutProyectoInput: ["where", "data"],
  AvanceUpdateManyWithWhereWithoutProyectoInput: ["where", "data"],
  InscripcionUpsertWithWhereUniqueWithoutProyectoInput: ["where", "update", "create"],
  InscripcionUpdateWithWhereUniqueWithoutProyectoInput: ["where", "data"],
  InscripcionUpdateManyWithWhereWithoutProyectoInput: ["where", "data"],
  ProyectoCreateWithoutObjetivosInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "avances", "inscripciones"],
  ProyectoCreateOrConnectWithoutObjetivosInput: ["where", "create"],
  ProyectoUpsertWithoutObjetivosInput: ["update", "create"],
  ProyectoUpdateWithoutObjetivosInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "avances", "inscripciones"],
  ProyectoCreateWithoutAvancesInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "inscripciones"],
  ProyectoCreateOrConnectWithoutAvancesInput: ["where", "create"],
  UsuarioCreateWithoutAvancesCreadosInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "proyectosLiderados", "inscripciones"],
  UsuarioCreateOrConnectWithoutAvancesCreadosInput: ["where", "create"],
  ProyectoUpsertWithoutAvancesInput: ["update", "create"],
  ProyectoUpdateWithoutAvancesInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "inscripciones"],
  UsuarioUpsertWithoutAvancesCreadosInput: ["update", "create"],
  UsuarioUpdateWithoutAvancesCreadosInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "proyectosLiderados", "inscripciones"],
  ProyectoCreateWithoutInscripcionesInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "avances"],
  ProyectoCreateOrConnectWithoutInscripcionesInput: ["where", "create"],
  UsuarioCreateWithoutInscripcionesInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados"],
  UsuarioCreateOrConnectWithoutInscripcionesInput: ["where", "create"],
  ProyectoUpsertWithoutInscripcionesInput: ["update", "create"],
  ProyectoUpdateWithoutInscripcionesInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "objetivos", "avances"],
  UsuarioUpsertWithoutInscripcionesInput: ["update", "create"],
  UsuarioUpdateWithoutInscripcionesInput: ["id", "correo", "nombre", "apellido", "identificacion", "telefono", "rol", "estado", "proyectosLiderados", "avancesCreados"],
  ProyectoCreateManyLiderInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase"],
  AvanceCreateManyCreadoPorInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId"],
  InscripcionCreateManyEstudianteInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyectoId"],
  ProyectoUpdateWithoutLiderInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "objetivos", "avances", "inscripciones"],
  AvanceUpdateWithoutCreadoPorInput: ["id", "fecha", "descripcion", "observaciones", "proyecto"],
  InscripcionUpdateWithoutEstudianteInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "proyecto"],
  ObjetivoCreateManyProyectoInput: ["id", "descripcion", "tipo"],
  AvanceCreateManyProyectoInput: ["id", "fecha", "descripcion", "observaciones", "usuarioId"],
  InscripcionCreateManyProyectoInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "usuarioId"],
  ObjetivoUpdateWithoutProyectoInput: ["id", "descripcion", "tipo"],
  AvanceUpdateWithoutProyectoInput: ["id", "fecha", "descripcion", "observaciones", "creadoPor"],
  InscripcionUpdateWithoutProyectoInput: ["id", "estado", "fechaIngreso", "fecjaEgreso", "estudiante"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

