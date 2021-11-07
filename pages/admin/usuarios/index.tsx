import Head from "next/head";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <Head>
        <title>Admin Usuarios | Gestión de Proyectos</title>
      </Head>
          <div>Página Anidada de Admin de Usuarios</div>
          <Link href="/">
          <a>Regresar al sitio Principal</a></Link>
    </div>
  );
};

export default index;
