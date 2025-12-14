'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="font-bold text-2xl mb-2 tracking-tight">SUZAA</div>
            <div className="text-white/80 leading-relaxed">Payments, Simplified.</div>
          </div>

          {/* Product Column */}
          <div>
            <div className="font-semibold mb-4">Product</div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('pricing');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('how-it-works');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  How it works
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <div className="font-semibold mb-4">Company</div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://docs.suzaa.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <div className="font-semibold mb-4">Legal</div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://docs.suzaa.com/05-legal/02-privacy-and-data"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://docs.suzaa.com/05-legal/01-terms-of-use"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="https://docs.suzaa.com/05-legal/03-policies-and-notices"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-white/80 text-sm">
            © 2026 SUZAA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

