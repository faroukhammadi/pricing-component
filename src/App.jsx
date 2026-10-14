import React from "react";

const plans = [
  {
    name: "Listener",
    price: "$0",
    description: "Start exploring millions of songs with basic features and ads.",
    features: ["Ad-supported streaming", "Curated playlists"],
    cta: "Start listening",
    featured: false,
    styles: {
      card: "bg-gray-100 ring-1 ring-gray-300 rounded-xl p-8",
      name: "text-indigo-600",
      price: "text-gray-900",
      per: "text-gray-500",
      desc: "",
      list: "text-gray-700",
      check: "text-green-700",
      button:
        "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
    },
  },
  {
    name: "Premium",
    price: "$9.99",
    description:
      "Enjoy the full music experience with unlimited access and downloads.",
    features: ["Ad-free listening", "Offline playback", "Unlimited skips"],
    cta: "Go Premium",
    featured: true,
    badge: "Most Popular",
    styles: {
      card: "relative bg-gray-950 text-white ring-2 ring-fuchsia-500 p-8 rounded-xl scale-105",
      name: "text-fuchsia-200",
      price: "text-white",
      per: "text-fuchsia-300",
      desc: "text-gray-300",
      list: "text-fuchsia-100",
      check: "text-green-500",
      button:
        "bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white hover:from-fuchsia-600 hover:to-indigo-700",
    },
  },
  {
    name: "Family",
    price: "$14.99",
    description: "Enjoy all of the features with a plan for up to 6 family members.",
    features: [
      "All Premium features",
      "Up to 6 accounts",
      "Individual playlists & libraries",
      "Family Mix playlists",
    ],
    cta: "Start Family Plan",
    featured: false,
    styles: {
      card: "bg-gray-100 ring-1 ring-gray-300 p-8 rounded-xl",
      name: "text-indigo-600",
      price: "text-gray-900",
      per: "text-gray-500",
      desc: "text-gray-600",
      list: "text-gray-700",
      check: "text-green-700",
      button: "bg-indigo-600 text-white hover:bg-indigo-700",
    },
  },
];

function PlanCard({ plan }) {
  const { styles } = plan;

  return (
    <div className={`${styles.card} grid grid-rows-[1fr_auto] gap-6`}>
      {plan.badge && (
        <div className="absolute -top-3 right-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full px-3 py-1 text-xs font-bold text-white">
          {plan.badge}
        </div>
      )}

      <div className="grid grid-rows-[auto_auto_auto_1fr] gap-y-2">
        <h2 className={`text-lg font-semibold ${styles.name}`}>{plan.name}</h2>
        <p className={`text-4xl font-bold ${styles.price}`}>
          {plan.price}
          <span className={`text-base font-medium ${styles.per}`}>/month</span>
        </p>
        <p className={styles.desc}>{plan.description}</p>
        <ul className={`mt-6 space-y-2 text-sm ${styles.list}`}>
          {plan.features.map((feature) => (
            <li key={feature}>
              <span aria-hidden className={`${styles.check} mr-2`}>
                &#10003;
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#"
        className={`block rounded-md px-4 py-2 text-center font-semibold ${styles.button}`}
      >
        {plan.cta}
      </a>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main>
        <h1 className="mt-8 mb-12 text-center text-3xl md:text-5xl font-semibold text-gray-900">
          Choose your listening plan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8 mt-16 px-4">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </main>
    </div>
  );
}