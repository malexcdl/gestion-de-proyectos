import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <p>Pagina de Index - Desde la Rama DEV</p>
      <Link href="/admin/usuarios">
        <a className="cursor-pointer">Ir a Admin/Usuarios</a>
      </Link>
    </div>
  );
};

export default Home;
