'use client';

import Image from "next/image"; 
import FooterHome from "../components/FooterHome";
import NewsletterSection from "../components/NewsletterSection";
import Link from "next/link";
import FeatureSection from "../components/FeatureSection";
import Carrossel from "../components/Carrossel";
import { Sparkles, Star } from "lucide-react";

export default function ImageGallery() {
  const images = [
    "/images/vestidofundo.png",
    "/images/vestido2.png",
    "/images/vestido3.png",
    "/images/vestido4.png",
    "/images/vestido5.png",
    "/images/vestido6.png",
  ];

  return (
    <>
     <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-rose"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Sua Elegância</span>
              <span className="block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Nossa Paixão
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubra nossa coleção exclusiva de vestidos que combinam estilo, conforto e sofisticação para cada momento especial da sua vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl">
                Ver Coleção
              </button>
              <button className="border border-pink-300 text-pink-600 px-8 py-3 rounded-full font-medium hover:bg-pink-50 transition-colors">
                Lookbook
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="w-6 h-6 text-pink-400" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse">
          <Star className="w-8 h-8 text-rose-400" />
        </div>
      </section>

   <div className="flex justify-center items-center mt-15 mb-10">
      <Carrossel
        images={[
          "/images/banner.png",
          "/images/banner2.png",
          "/images/banner3.png",
        ]}
      />
    </div>

      <FeatureSection />
      <div className="grid grid-cols-3 gap-4 gap-y-20 p-4 md:grid-cols-3">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center items-center overflow-hiddenflex">
            <Image
              src={src}
              alt={`Vestido ${index + 1}`}
              width={400}
              height={400}
              className="rounded-lg h-135 w-100 object-cover pb-4 transform transition duration-300 hover:scale-110 "
            />
         
          </div>          
        ))}
      </div>

  {/* Botão centralizado fora da grid */}
   <div className="flex justify-center mb-5">
  <Link
    href="/catalogo"
    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow cursor-pointer"
  >
    Ver Todos os Produtos
  </Link>
</div>
      <NewsletterSection />
      <FooterHome />
    </>
  );
}