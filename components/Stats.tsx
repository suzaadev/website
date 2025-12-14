export default function Stats() {
  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '175+', label: 'Countries' },
    { number: '0%', label: 'Transaction Fees' },
    { number: '100%', label: 'Uptime' },
  ];

  return (
    <section className="bg-off-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${
                index < stats.length - 1
                  ? 'border-r-0 md:border-r border-slate-200 pr-0 md:pr-8'
                  : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 tabular-nums">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

