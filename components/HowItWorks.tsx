export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Connect',
      description: 'Create your account with just an email. Receive your login PIN instantly.',
    },
    {
      number: '2',
      title: 'Configure',
      description: 'Add your own wallet. No custody, no KYC, full control. Your wallet, your keys.',
    },
    {
      number: '3',
      title: 'Get Paid',
      description: 'Generate a payment request and share it. That\'s it—get paid in seconds.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-br from-dark-navy to-deep-ink py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            How SUZAA Works
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Simple steps. Powerful use cases.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/30 mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

