import { Truck, CreditCard, RotateCcw } from 'lucide-react';
export default function FeatureSection() {
    return ( 
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Frete Grátis</h3>
              <p className="text-gray-600">Acima de R$ 299 para todo o Brasil</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pagamento Seguro</h3>
              <p className="text-gray-600">Parcele em até 10x sem juros</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Troca Grátis</h3>
              <p className="text-gray-600">30 dias para trocar ou devolver</p>
            </div>
          </div>
        </div>
      </section>
    );
}