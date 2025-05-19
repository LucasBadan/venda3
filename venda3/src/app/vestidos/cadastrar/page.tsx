'use client';

import React, { useState } from 'react';

export default function CadastrarVestido() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [cor, setCor] = useState('');
    const [imagemUrl, setImagemUrl] = useState('');
    const [loading, setLoading] = useState(false);
    
    async function handleCadastro(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setLoading(true);

        try{
            const res = await fetch('/api/add/add-vestido', {
                method: 'POST',
                headers:{'content-Type': 'application/json'},
                body: JSON.stringify({nome, descricao, preco, tamanho, cor, imagemUrl}),
        });
    

        if(!res.ok){
            const errorData = await res.json();
            console.error('Erro ao cadastrar vestido:', errorData);
            alert('Erro ao cadastrar vestido. Tente novamente.');
;
        }

        alert('Vestido cadastrado com sucesso!');
        setNome('');
        setDescricao('');
        setPreco('');
        setTamanho('');
        setCor('');
        setImagemUrl('');
        }
        catch (error) {
            alert('Erro ao cadastrar vestido. Tente novamente.');
            console.error('Erro ao cadastrar vestido:', error); 
        }finally {
            setLoading(false);
        }
    }

     return (
    <div className="p-6 max-w-lg mx-auto mt-20 bg-white rounded-xl shadow-md">
      <h2 className="text-2x1 text-stone-500 font-bold mb-4">Cadastrar Vestido</h2>
      <form onSubmit={handleCadastro} className="space-y-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="placeholder-black text-black border border-black w-full p-2 border rounded "
          required
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="text-black w-full p-2 border rounded placeholder-black border border-black"
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="text-black w-full p-2 border rounded placeholder-black border border-black"
          required
        />
        <input
          type="text"
          placeholder="Tamanho"
          value={tamanho}
          onChange={(e) => setTamanho(e.target.value)}
          className="text-black w-full p-2 border rounded placeholder-black border border-black"
          required
        />
        <input
          type="text"
          placeholder="Cor"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
          className="text-black w-full p-2 border rounded placeholder-black border border-black "
          required
        />
        <input
          type="text"
          placeholder="URL da Imagem"
          value={imagemUrl}
          onChange={(e) => setImagemUrl(e.target.value)}
          className="text-black w-full p-2 border rounded placeholder-black border border-black"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-stone-500 text-white rounded hover:stone-600"
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}
