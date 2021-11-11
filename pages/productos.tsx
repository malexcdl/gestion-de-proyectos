import React from "react";
import { PrismaClient } from ".prisma/client";
import safeJsonStringify from "safe-json-stringify";

const prisma = new PrismaClient();

//Aqui podemos compartir información desde el Backend hacia el frontend

//Esto es código de servidor:
export async function getStaticProps() {
  //   const mivariable = "Hola, ServerSide Props";
  //   console.log("MiVar", mivariable);
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
  return {
    // props: { mivariable }, // will be passed to the page component as props
    props: { productos: JSON.parse(safeJsonStringify(productos)) }, // will be passed to the page component as props
  };
}

//Esto es código de cliente:
// const Productos = ({ mivariable }) => {
const Productos = ({ productos }) => {
  console.log("Esta es la variable en el front", productos);
  return (
    <div>
      Estos son mis productos:
      <div>Tabla Productos</div>
      {productos.map((p)=> {
          return <div key={p.id}>{p.nombre}</div>
      })}
    </div>
  );
};

export default Productos;
