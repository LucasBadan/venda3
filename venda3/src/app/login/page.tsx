'use client';

import {useState} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthService from '../services/auth.service';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

async function handlerLogin(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
  setLoading(true);

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Erro ao realizar login:", errorData.error);
      alert(errorData.error); 
      return;
    }

    const data = await res.json();
    console.log("Usuário logado:", data.user.name);
    
    AuthService.login(data.token);

    router.push('/home');

  } catch (error) {
    console.error("Erro ao realizar login:", error);
    alert("Erro inesperado. Tente novamente.");
    
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-900">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="placeholder-gray-500 text-black w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:stone-400"
            />
          </div>
          
          <div>
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="placeholder-gray-500 text-black w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <button className={`px-4 py-2 bg-stone-500 text-white rounded ${loading ? 'bg-gray-200 cursor-wait' : 'bg-stone-500 hover:bg-stone-600 cursor-pointer'}`}
            type="button"
            onClick={handlerLogin}
            disabled={loading}
            >
            {loading ? 'Entrando...' : 'Entrar'}
          
            </button>

            <Link href="/cadastro"className="px-4 py-2 bg-stone-500 text-white rounded hover:bg-stone-500">
             Cadastrar-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}