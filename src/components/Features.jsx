import { Check } from 'lucide-react'

const FEATURES = [
  { title: 'Blazing fast', desc: 'Optimized for speed and SEO so you can rank and convert.' },
  { title: 'Built-in auth', desc: 'Email magic links with social sign-in ready to go.' },
  { title: 'Usage-based billing', desc: 'Stripe integration with metered and seat pricing.' },
  { title: 'Team workspaces', desc: 'Invite your team and manage permissions with ease.' },
  { title: 'Analytics', desc: 'Understand acquisition, activation and retention in one place.' },
  { title: 'Developer API', desc: 'REST + Webhooks so you can extend and automate.' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 border-t bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need to ship</h2>
          <p className="mt-3 text-gray-600">A focused set of features to launch, grow and scale your product.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border bg-white">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Check size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
