export default function Stats() {
  const stats = [
    {
      number: '10,000+',
      description: 'Supported crypto assets across coins, tokens, and chains.',
    },
    {
      number: '175+',
      description: 'Supported countries',
      subDescription: 'No KYC required to start.',
    },
    {
      number: '0%',
      description: 'No per-transaction charges.',
      subDescription: 'Fully transparent flat-fee pricing.',
    },
    {
      number: '100%',
      description: 'Open source core.',
      subDescription: 'Always free self-hosted.',
    },
  ];

  return (
    <section className="bg-off-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 tabular-nums">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 leading-relaxed space-y-1">
                <div>{stat.description}</div>
                {stat.subDescription && (
                  <div className="text-slate-500">{stat.subDescription}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

