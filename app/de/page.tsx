import Link from "next/link";

export default function DeutschPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-[#f4f4f4]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-[#6349ea]/10 text-[#6349ea] rounded-full text-sm font-medium mb-6">
              Neue Funktionen Verfügbar
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#242424] mb-6">
              Intelligente Terminplanung
              <br />
              Einfach Gemacht
            </h1>
            <p className="text-xl text-[#898989] max-w-3xl mx-auto mb-8">
              Professionelle Terminverwaltung ohne endlose E-Mails.
              Kalender verbinden, Verfügbarkeit festlegen und Termine buchen lassen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-[#292929] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#0d0c27] transition-colors"
              >
                Kostenlos Starten
              </Link>
              <Link
                href="/demo"
                className="border-2 border-[#292929] text-[#292929] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#f4f4f4] transition-colors"
              >
                Demo Anzeigen
              </Link>
            </div>
            <p className="mt-4 text-sm text-[#898989]">Für immer kostenlos • Keine Kreditkarte erforderlich</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Alles was Sie brauchen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6349ea]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#6349ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kalender-Sync</h3>
              <p className="text-[#898989]">Verbinden Sie alle Ihre Kalender um Doppelbuchungen zu vermeiden</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6349ea]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#6349ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Intelligente Planung</h3>
              <p className="text-[#898989]">Legen Sie Ihre Verfügbarkeit fest und lassen Sie andere Zeit buchen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6349ea]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#6349ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video-Meetings</h3>
              <p className="text-[#898989]">Integrierte Videokonferenzen oder eigene Tools einbinden</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}