'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type Vestido = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  tamanho: string;
  cor: string;
  imagemUrl: string;
};

export default function Vestidos() {
  const [vestidos, setVestidos] = useState<Vestido[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  useEffect(() => {
    async function fetchVestidos() {
      setLoading(true);

      const url = search ? `/api/vestidos/search?nome=${search}` : '/api/vestidos';
      const res = await fetch(url);
      const data = await res.json();
      setVestidos(data);
      setLoading(false);
    }

    fetchVestidos();
  }, [search]);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch('/api/vestidos', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        alert('Vestido deletado com sucesso!');
       
      } else {
        const errorData = await res.json();
        console.error('Erro ao deletar vestido:', errorData);
        alert('Erro ao deletar vestido.');
      }
    } catch (error) {
      console.error('Erro ao deletar:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-stone-500">Carregando vestidos...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {vestidos.length === 0 ? (
    <p className="text-stone-500 text-lg text-center mt-10">
      Nenhum vestido encontrado.
    </p>
  ) : (
    <>
      {vestidos.map((vestido) => (
        <div key={vestido.id} className="max-w-md mx-auto bg-white p-4 shadow rounded">
          <Image
            src={vestido.imagemUrl}
            alt={vestido.nome}
            width={300}
            height={200}
            className="w-full h-120 object-cover rounded"
          />
          <h2 className="text-lg font-semibold text-stone-500">{vestido.nome}</h2>
          <p className="text-stone-500">Descrição: {vestido.descricao}</p>
          <p className="text-stone-500">Cor: {vestido.cor}</p>
          <p className="text-stone-500">Tamanho: {vestido.tamanho}</p>
          <p className="text-stone-500">Preço: R$ {vestido.preco.toFixed(2)}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => handleDelete(vestido.id)}
              className="bg-black text-white px-3 py-1 rounded cursor-pointer hover:bg-stone-500"
            >
              Deletar
            </button>
            <Link
              href={`/catalogo/edit/${vestido.id}`}
              className="bg-black text-white px-3 py-1 rounded cursor-pointer hover:bg-stone-500"
            >
              Editar
            </Link>
          </div>
        </div>
      ))}
    </>
  )}
</div>
  );
}