export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reliable Renovation Services
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Quality work. Transparent pricing. On-time delivery.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Get a Free Quote
        </button>
      </section>

      {/* Services */}
{/* Why Choose Us */}
<section className="py-20 px-6">
  <h2 className="text-3xl font-semibold text-center mb-12">
    Why Choose Us
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
    <div>
      <h3 className="font-semibold mb-2">Experienced Team</h3>
      <p className="text-gray-600">Skilled professionals with years of hands-on experience.</p>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Transparent Pricing</h3>
      <p className="text-gray-600">No hidden fees. Clear estimates from day one.</p>
    </div>

    <div>
      <h3 className="font-semibold mb-2">On-Time Delivery</h3>
      <p className="text-gray-600">We respect your schedule and deliver as promised.</p>
    </div>
  </div>
</section>

{/* Final CTA
<section className="bg-black text-white text-center py-16 px-6">
  <h2 className="text-3xl font-semibold mb-6">
    Ready to Start Your Project?
  </h2>
  <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition">
    Request a Free Estimate
  </button>
</section> */}

{/* Contact Section */}
<section className="py-20 px-6 bg-gray-50">
  <h2 className="text-3xl font-semibold text-center mb-12">
    Contact Us
  </h2>

  <form className="max-w-2xl mx-auto grid gap-6">
    <input
      type="text"
      placeholder="Full Name"
      className="border px-4 py-3 rounded-md"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      className="border px-4 py-3 rounded-md"
    />

    <select className="border px-4 py-3 rounded-md">
      <option>Select Service</option>
      <option>Kitchen Renovation</option>
      <option>Bathroom Upgrade</option>
      <option>Flooring Installation</option>
      <option>Painting & Finishing</option>
    </select>

    <textarea
      placeholder="Tell us about your project"
      rows={4}
      className="border px-4 py-3 rounded-md"
    />

    <button
      type="submit"
      className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
    >
      Send Request
    </button>
  </form>
</section>

    </main>
  );
}