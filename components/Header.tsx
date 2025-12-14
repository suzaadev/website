'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-foreground font-bold text-xl tracking-tight">
              SUZAA
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-it-works');
              }}
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              How it works
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('pricing');
              }}
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="https://docs.suzaa.com"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Sign In Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="https://app.suzaa.com"
              className="hidden md:block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sign In
            </a>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                }}
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                How it works
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('pricing');
                }}
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="https://docs.suzaa.com"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                Docs
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <a
                href="https://app.suzaa.com"
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

