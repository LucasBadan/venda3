
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-900">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="placeholder-gray-500 w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:stone-400"
            />
          </div>
          
          <div>
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="placeholder-gray-500 w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:stone-pink-500"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <button className="px-4 py-2 bg-stone-500 text-white rounded hover:bg-stone-500">
              Entrar
            </button>
            <button className="px-4 py-2 bg-stone-500 text-white rounded hover:bg-stone-500">
              Cadastrar-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}