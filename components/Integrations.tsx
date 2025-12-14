export default function Integrations() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Integrations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            SUZAA integrates with existing commerce platforms to streamline your payment workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md hover:border-slate-300 transition-all">
            <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              WooCommerce
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Seamless checkout integration for WooCommerce stores. Accept cryptocurrency payments directly at checkout.
            </p>
            <a
              href="https://github.com/suzaadev/plugin-WooCommerce/releases/tag/v1.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:text-[#0970e6] transition-colors font-medium"
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Plugin
            </a>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md hover:border-slate-300 transition-all">
            <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              API Access
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Full REST API for custom integrations. Build payment flows that fit your business requirements.
            </p>
            <a
              href="https://docs.suzaa.com/03-developers/01-api-reference"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:text-[#0970e6] transition-colors font-medium"
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              View API Docs
            </a>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md hover:border-slate-300 transition-all">
            <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Payment Links
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Generate and share payment links programmatically. Integrate with any platform that supports webhooks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

