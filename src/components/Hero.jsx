export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-gray-200 text-gray-700 bg-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
              Live in minutes, not months
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Launch your SaaS with a clean, modern look
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Beautiful marketing site, pricing, and onboarding out of the box. Built with performance and best practices baked in.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800">See pricing</a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border font-semibold hover:bg-gray-50">Explore features</a>
            </div>
            <p className="mt-3 text-sm text-gray-500">No credit card required • 14-day free trial</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-100/50 via-indigo-100/40 to-transparent rounded-3xl" />
            <div className="relative bg-white rounded-2xl border shadow-sm p-4">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold">
                Your product screenshot
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-gray-50">Analytics</div>
                <div className="p-3 rounded-lg bg-gray-50">Automations</div>
                <div className="p-3 rounded-lg bg-gray-50">Integrations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
