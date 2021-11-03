import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
          <div>Página Anidada de Admin de Usuarios</div>
          <Link href="/">
          <a>Regresar al sitio Principal</a></Link>
    </div>
  );
};

export default index;
