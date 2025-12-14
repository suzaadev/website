export default function Integrations() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Integrations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            SUZAA integrates with existing commerce platforms to streamline your payment workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-foreground"
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
            <p className="text-slate-600 leading-relaxed">
              Seamless checkout integration for WooCommerce stores. Accept cryptocurrency payments directly at checkout.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-foreground"
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
            <p className="text-slate-600 leading-relaxed">
              Full REST API for custom integrations. Build payment flows that fit your business requirements.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-foreground"
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

