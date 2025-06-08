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
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
    {vestidos.length === 0 ? (
      <p className="text-stone-500 text-lg text-center mt-10">
        Nenhum vestido encontrado.
      </p>
    ) : (
      <>
        {vestidos.map((vestido) => (
          <div
            key={vestido.id}
            className="relative max-w-xs mx-auto bg-pink-50 shadow-lg rounded-2xl overflow-hidden flex flex-col items-center"
          >

            {/* Imagem */}
            <Image
              src={vestido.imagemUrl}
              alt={vestido.nome}
              width={420}
              height={450}
              className="w-full h-[550px] object-cover rounded-2xl"
            />

            {/* Conteúdo */}
            <div className="p-4 w-full flex flex-col items-start">
              <h2 className="text-lg font-semibold text-stone-700 mb-1">{vestido.nome}</h2>
              <p className="text-stone-500 text-sm mb-1">Descrição: {vestido.descricao}</p>
              <p className="text-stone-500 text-sm mb-1">Cor: {vestido.cor}</p>
              <p className="text-stone-500 text-sm mb-1">Tamanho: {vestido.tamanho}</p>
              <p className="text-stone-700 text-base font-bold mb-3">
                Preço: R$ {vestido.preco.toFixed(2)}
              </p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleDelete(vestido.id)}
                  className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-stone-700 transition"
                >
                  Deletar
                </button>
                <Link
                  href={`/catalogo/edit/${vestido.id}`}
                  className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-stone-700 transition"
                >
                  Editar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    )}

    {/* Botão para cadastrar vestido */}
    <div className="col-span-full text-center mt-6">
      <Link
        href="/cadastrar"
        className="inline-block bg-pink-100 text-pink-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-pink-200 transition mb-3"
      >
        Cadastrar Vestido
      </Link>
    </div>
  </div>
);
}