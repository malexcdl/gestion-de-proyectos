import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

const RutaApiProductos = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    console.log("Hice un GET");
    const productos = await prisma.producto.findMany({
      include: {
        inventario: {
          include: {
            movimientoInventario: {
              include: {
                usuario: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json({ productos });
  }
  if (req.method === "POST") {
    const productoCreado = await prisma.producto.create({
      data: {
        nombre: "Pantalla",
        foto: "Foto de Pantalla",
      },
    });
    res.status(200).json({producto: productoCreado})
  }
};
export default RutaApiProductos;
