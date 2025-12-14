export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05] mb-6">
          Payments, Simplified.
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Open-source, self-hostable, white-label software — offered as SaaS or deployable on your own servers. We charge no percentages, just a simple flat fee. Suzaa is a tool, not a financial intermediary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://app.suzaa.com"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-sm hover:bg-[#0970e6] transition-colors text-center"
          >
            Launch App →
          </a>
          <a
            href="https://app.suzaa.com/recipient"
            className="w-full sm:w-auto px-8 py-3 border border-slate-300 text-foreground font-medium rounded-lg hover:bg-slate-50 transition-colors text-center"
          >
            Look Up Recipient
          </a>
        </div>
      </div>
    </section>
  );
}

