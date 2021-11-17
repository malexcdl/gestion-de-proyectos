-- CreateEnum
CREATE TYPE "Enum_Rol" AS ENUM ('Estudiante', 'Lider', 'Administrador');

-- CreateEnum
CREATE TYPE "Enum_EstadoUsuario" AS ENUM ('Pendiente', 'Autorizado', 'NoAutorizado');

-- CreateEnum
CREATE TYPE "Enum_EstadoProyecto" AS ENUM ('Activo', 'Inactivo');

-- CreateEnum
CREATE TYPE "Enum_FaseProyecto" AS ENUM ('Iniciado', 'Desarrollo', 'Terminado');

-- CreateEnum
CREATE TYPE "Enum_TipoObjetivo" AS ENUM ('General', 'Especifico');

-- CreateEnum
CREATE TYPE "Enum_EstadoInscripcion" AS ENUM ('Aceptada', 'Rechazada');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "rol" "Enum_Rol" NOT NULL,
    "estado" "Enum_EstadoUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proyecto" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "presupuesto" DOUBLE PRECISION NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "estado" "Enum_EstadoProyecto" NOT NULL,
    "fase" "Enum_FaseProyecto" NOT NULL,

    CONSTRAINT "Proyecto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objetivo" (
    "id" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipo" "Enum_TipoObjetivo" NOT NULL,
    "proyectoId" TEXT NOT NULL,

    CONSTRAINT "Objetivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avance" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "observaciones" TEXT NOT NULL,
    "proyectoId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Avance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inscripcion" (
    "id" TEXT NOT NULL,
    "estado" "Enum_EstadoInscripcion" NOT NULL,
    "fechaIngreso" TIMESTAMP(3) NOT NULL,
    "fecjaEgreso" TIMESTAMP(3) NOT NULL,
    "proyectoId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Inscripcion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_identificacion_key" ON "Usuario"("identificacion");

-- AddForeignKey
ALTER TABLE "Proyecto" ADD CONSTRAINT "Proyecto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objetivo" ADD CONSTRAINT "Objetivo_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avance" ADD CONSTRAINT "Avance_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avance" ADD CONSTRAINT "Avance_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
