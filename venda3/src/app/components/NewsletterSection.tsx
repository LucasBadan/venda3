export default function NewsletterSection() {
return (
    <section className="py-16 bg-gradient-to-b from-pink-200 to-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Receba Nossas Novidades
          </h2>
          <p className="text-gray-600 mb-8">
            Seja a primeira a saber sobre lançamentos, promoções exclusivas e dicas de estilo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 cursor-pointer">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>
  );
}