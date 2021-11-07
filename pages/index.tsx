import type { NextPage } from "next";
import Head from 'next/head'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <Head>
        <title>Home | Gestión de Proyectos</title>
      </Head>
      <p>Pagina de Index - Desde la Rama DEV</p>
      <Link href="/admin/usuarios">
        <a className="cursor-pointer">Ir a Admin/Usuarios</a>
      </Link>
      <div>
        <i className="fas fa-home" />
      </div>
    </div>
  );
};

export default Home;
