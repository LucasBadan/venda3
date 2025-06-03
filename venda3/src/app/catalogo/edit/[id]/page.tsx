'use client';
import { use } from 'react';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
type VestidoForm = {
  nome: string;
  descricao: string;
  preco: number;
  tamanho: string;
  cor: string;
  imagemUrl: string;
};
export default function EditVestido({ params }: {params: Promise<{ id: string }> }) {
  const {id} = use (params);
  const router = useRouter();
  const [vestido, setVestido] = useState<VestidoForm>({
    nome: '',
    descricao: '',
    preco: 0,
    tamanho: '',
    cor: '',
    imagemUrl: ''
  });
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    async function fetchVestido() {
      try {
        const res = await fetch(`/api/vestidos/${id}`);
        if (!res.ok) throw new Error('Erro ao buscar vestido');
        
        const data = await res.json();
        setVestido({
          nome: data.nome,
          descricao: data.descricao,
          preco: data.preco,
          tamanho: data.tamanho,
          cor: data.cor,
          imagemUrl: data.imagemUrl
        });
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao carregar dados do vestido');
      } finally {
        setLoading(false);
      }
    }
    
    fetchVestido();
  }, [id]); 

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setVestido(prev => ({
      ...prev,
      [name]: name === 'preco' ? parseFloat(value) : value
    }));
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const res = await fetch(`/api/vestidos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vestido), 
      });

      if (!res.ok) {
        const errorText = await res.text();  
        console.error('Erro ao atualizar vestido:', res.status, errorText);
        throw new Error(`Erro ao atualizar vestido: ${res.status} - ${errorText}`);
      }

      alert('Vestido atualizado com sucesso!');
      router.push('/catalogo');
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao atualizar vestido. Tente novamente.');
    }
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className=" bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Editar Vestido</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700">Nome:</label>
          <input
            type="text"
            name="nome"
            value={vestido.nome}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-500"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 text-gray-700">Descrição:</label>
          <textarea
            name="descricao"
            value={vestido.descricao}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-500"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 text-gray-700">Preço:</label>
          <input
            type="number"
            name="preco"
            step="0.01"
            value={vestido.preco}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-500"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 text-gray-700">Tamanho:</label>
          <input
            type="text"
            name="tamanho"
            value={vestido.tamanho}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-500"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 text-gray-700">Cor:</label>
          <input
            type="text"
            name="cor"
            value={vestido.cor}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-500"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 text-gray-700">URL da Imagem:</label>
          <input
            type="text"
            name="imagemUrl"
            value={vestido.imagemUrl}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-500"
            required
          />
        </div>
        
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-stone-500 cursor-pointer"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={() => router.push('/catalogo')}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}