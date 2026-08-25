import Link from "next/link";

export default function EspanolPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-[#f4f4f4]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-[#242424] mb-6">
              Programación Inteligente
              <br />
              Simplificada
            </h1>
            <p className="text-xl text-[#898989] max-w-3xl mx-auto mb-8">
              Gestión profesional de citas para empresas y profesionales.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-[#292929] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#0d0c27] transition-colors"
            >
              Empezar Gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}