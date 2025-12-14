'use client';

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: 'Limited',
      features: [
        'Up to 10 payment links',
        'Up to 3 wallets addresses',
        'Basic support',
        'Community access',
      ],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Business',
      price: '$10',
      period: 'month',
      features: [
        'Unlimited payment links',
        'Priority support',
        'Advanced analytics',
        'API access',
      ],
      cta: 'Get Started',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact for pricing',
      features: [
        'Everything in Business',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No hidden fees. Scale as you grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border ${
                plan.highlight
                  ? 'border-primary bg-off-white'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground tabular-nums">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-slate-600 ml-2">
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.cta === 'Get Started' ? (
                <a
                  href="https://app.suzaa.com"
                  className={`w-full py-3 px-6 rounded-lg font-semibold shadow-sm transition-colors text-center block ${
                    plan.highlight
                      ? 'bg-primary text-white hover:bg-[#0970e6]'
                      : 'bg-foreground text-white hover:opacity-95'
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToContact();
                  }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold shadow-sm transition-colors text-center block ${
                    plan.highlight
                      ? 'bg-primary text-white hover:bg-[#0970e6]'
                      : 'bg-foreground text-white hover:opacity-95'
                  }`}
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <p className="text-sm text-slate-500 text-center">
              Self-Hosted version is always free and open for the community. Unlimited links, unlimited wallets, full API access.
            </p>
            <a
              href="https://github.com/suzaadev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm border border-slate-300 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

