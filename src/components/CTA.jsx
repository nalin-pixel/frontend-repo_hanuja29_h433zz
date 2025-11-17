export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-900 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Ready to get started?</h3>
            <p className="mt-1 text-gray-300">Spin up your project and invite your team in minutes.</p>
          </div>
          <div className="flex gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100">See pricing</a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500">Start free</a>
          </div>
        </div>
      </div>
    </section>
  )
}
