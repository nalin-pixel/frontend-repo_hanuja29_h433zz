const PLANS = [
  {
    name: 'Starter',
    price: 0,
    period: 'forever',
    tagline: 'For side projects and MVPs',
    cta: 'Start free',
    features: ['Up to 1k monthly requests', 'Single user', 'Community support'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 29,
    period: 'month',
    tagline: 'Best for growing teams',
    cta: 'Start 14-day trial',
    features: ['100k monthly requests', 'Up to 5 team members', 'Email support', 'Custom domains'],
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 99,
    period: 'month',
    tagline: 'For scaling products',
    cta: 'Contact sales',
    features: ['1M+ monthly requests', 'Unlimited members', 'SLA & priority support', 'SAML SSO'],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Simple pricing</h2>
          <p className="mt-3 text-gray-600">Start for free. Upgrade when you grow.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative p-6 rounded-2xl border bg-white ${p.highlighted ? 'ring-2 ring-blue-600 border-transparent' : ''}`}>
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded-full">Most popular</span>
              )}
              <h3 className="font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.tagline}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{p.price === 0 ? 'Free' : `$${p.price}`}</span>
                {p.price !== 0 && <span className="text-gray-500">/ {p.period}</span>}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 inline-block" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full py-2.5 rounded-lg font-semibold ${p.highlighted ? 'bg-blue-600 text-white hover:bg-blue-500' : 'border hover:bg-gray-50'}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
