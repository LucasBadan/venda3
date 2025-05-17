'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
 
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

   async function handlerRegister() {
    setLoading(true);  

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

 if (res.ok) {
    const data = await res.json();
    console.log("Usuário cadastrado:", data.name); 
    router.push('/login');  
} else {
    console.error("Erro ao cadastrar:", await res.text());
}
}
  
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cadastro</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={e => setName(e.target.value)}
              className="placeholder-gray-500 w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-500 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={e=> setEmail(e.target.value)}
              className="placeholder-gray-500 w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-500 text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="placeholder-gray-500 w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-500 text-black"
            />
          </div>

       <button
         className={`w-full px-4 py-2 mt-4 rounded text-white 
         ${loading ? 'bg-gray-400 cursor-wait' : 'bg-stone-500 hover:bg-stone-600 cursor-pointer'}`}
         type="button"
         onClick={handlerRegister}
         disabled={loading}
        >
         {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
        </form>
        <h1 className='text-black text-center mt-4 '>Já tem uma conta? <Link href="/login" className="text-pink-500 hover:text-stone-500">Login</Link></h1>
      </div>
    </div>
  );
}