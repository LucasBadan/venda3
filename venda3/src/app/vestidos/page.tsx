import Link from "next/link";

export default function Vestidos() {
  return (
    <div>
      <h1 className="text-pink-500">Vestidos</h1>
      <Link href="/vestidos/cadastrar" className="text-stone-500 hover:text-pink-500">
        Cadastrar Vestido
      </Link>
    </div>
  );
}