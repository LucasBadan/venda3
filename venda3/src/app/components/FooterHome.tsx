export default function FooterHome() {
  return (
   <footer className="bg-[#20263e] text-white pt-12 pb-6">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Coluna 1: Logo e descrição */}
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-pink-400 text-2xl">♥</span>
        <span className="font-bold text-lg">Patricia</span>
      </div>
      <p className="text-gray-400 text-sm">
        Sua loja de vestidos favorita, onde elegância e estilo se encontram.
      </p>
    </div>
    {/* Coluna 2: Navegação */}
    <div>
      <h3 className="font-semibold mb-2">Navegação</h3>
      <ul className="space-y-1 text-gray-300 text-sm">
        <li><a href="#" className="hover:text-pink-300">Home</a></li>
        <li><a href="/catalogo" className="hover:text-pink-300">Produtos</a></li>
        <li><a href="#" className="hover:text-pink-300">Sobre</a></li>
        <li><a href="#" className="hover:text-pink-300">Contato</a></li>
      </ul>
    </div>
    {/* Coluna 3: Atendimento */}
    <div>
      <h3 className="font-semibold mb-2">Atendimento</h3>
      <ul className="space-y-1 text-gray-300 text-sm">
        <li><a href="#" className="hover:text-pink-300">Central de Ajuda</a></li>
        <li><a href="#" className="hover:text-pink-300">Trocas e Devoluções</a></li>
        <li><a href="#" className="hover:text-pink-300">Guia de Tamanhos</a></li>
        <li><a href="#" className="hover:text-pink-300">Fale Conosco</a></li>
      </ul>
    </div>
    {/* Coluna 4: Contato */}
    <div>
      <h3 className="font-semibold mb-2">Contato</h3>
      <ul className="space-y-1 text-gray-300 text-sm">
        <li>contato@patricia.com.br</li>
        <li>(11) 99999-9999</li>
        <li>Seg-Sex: 9h às 18h</li>
      </ul>
    </div>
  </div>
  <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
    © 2024 Patricia. Todos os direitos reservados.
  </div>
</footer>
  );
}