import Link from "next/link";

export default function FrancaisPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-[#f4f4f4]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-[#6349ea]/10 text-[#6349ea] rounded-full text-sm font-medium mb-6">
              Nouvelles Fonctionnalités
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#242424] mb-6">
              Planification Intelligente
              <br />
              Simplifiée
            </h1>
            <p className="text-xl text-[#898989] max-w-3xl mx-auto mb-8">
              Gestion professionnelle des rendez-vous sans emails interminables.
              Connectez vos calendriers et laissez vos clients réserver instantanément.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-[#292929] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#0d0c27] transition-colors"
              >
                Commencer Gratuitement
              </Link>
              <Link
                href="/demo"
                className="border-2 border-[#292929] text-[#292929] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#f4f4f4] transition-colors"
              >
                Voir la Démo
              </Link>
            </div>
            <p className="mt-4 text-sm text-[#898989]">Gratuit pour toujours • Sans carte de crédit</p>
          </div>
        </div>
      </section>
    </div>
  );
}