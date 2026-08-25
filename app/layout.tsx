import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cal.com | Scheduling Software for Online Bookings",
  description: "A fully customizable scheduling software for individuals, businesses taking calls and developers building scheduling platforms where users meet users.",
};

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-[#292929]">
              Cal.com
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-[#242424] hover:text-[#6349ea]">
                  Solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <Link href="/enterprise" className="text-sm text-[#242424] hover:text-[#6349ea]">
                Enterprise
              </Link>
              <Link href="/ai" className="text-sm text-[#242424] hover:text-[#6349ea]">
                Cal.ai
              </Link>
              <Link href="/pricing" className="text-sm text-[#242424] hover:text-[#6349ea]">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm text-[#242424] hover:text-[#6349ea]">
              Sign in
            </Link>
            <Link
              href="/signup"
              className="bg-[#292929] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0d0c27] transition-colors"
            >
              Get started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0c27] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Cal.com</h3>
            <p className="text-sm text-gray-400">
              The better way to schedule your meetings
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/features" className="hover:text-white">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/integrations" className="hover:text-white">Integrations</Link></li>
              <li><Link href="/api" className="hover:text-white">API</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-white">Support</Link></li>
              <li><Link href="/status" className="hover:text-white">Status</Link></li>
              <li><Link href="/security" className="hover:text-white">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Languages</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/de" className="hover:text-white">Deutsch</Link></li>
              <li><Link href="/fr" className="hover:text-white">Français</Link></li>
              <li><Link href="/nl" className="hover:text-white">Nederlands</Link></li>
              <li><Link href="/pt" className="hover:text-white">Português</Link></li>
              <li><Link href="/es" className="hover:text-white">Español</Link></li>
              <li><Link href="/it" className="hover:text-white">Italiano</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2024 Cal.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
