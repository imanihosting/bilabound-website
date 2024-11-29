import { CheckIcon } from '@heroicons/react/24/outline';
import Button from '../shared/Button';
import Link from 'next/link';

const tiers = [
  {
    name: 'Essence',
    id: 'tier-essence',
    price: '$8.99',
    features: [
      'Unlimited websites',
      '20 GB SSD storage',
      'Unlimited bandwidth',
      'Free SSL certificates',
      'Daily backups',
      '24/7 support',
    ],
    description: 'Perfect for getting started with your online journey.',
  },
  {
    name: 'EmpowerPlan',
    id: 'tier-empower',
    price: '$15.99',
    features: [
      'Unlimited websites',
      '50 GB SSD storage',
      'Unlimited bandwidth',
      'Email hosting',
      'Advanced security',
      'Priority support',
    ],
    description: 'Everything you need to grow your online presence.',
    featured: true,
  },
  {
    name: 'Inspire Plan',
    id: 'tier-inspire',
    price: '$29.99',
    features: [
      'Unlimited websites',
      '100 GB SSD storage',
      'Unlimited bandwidth',
      'Premium security',
      'Dedicated support',
      'Full data recovery',
    ],
    description: 'Advanced features for professional websites.',
  },
];

export default function PricingCards() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, Transparent Pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your needs. All plans include unlimited websites and bandwidth.
          </p>
        </div>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={clsx(
                'rounded-3xl p-8 ring-1',
                tier.featured ? 'bg-primary-500/5 ring-primary-500' : 'ring-gray-200'
              )}
            >
              <h3
                className={clsx(
                  'text-lg font-semibold leading-8',
                  tier.featured ? 'text-primary-600' : 'text-gray-900'
                )}
              >
                {tier.name}
              </h3>
              
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              
              <Button
                variant={tier.featured ? 'primary' : 'outline'}
                className="mt-6 w-full"
                asChild
              >
                <Link href="/contact">Get started</Link>
              </Button>
              
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={clsx(
                        'h-6 w-5 flex-none',
                        tier.featured ? 'text-primary-600' : 'text-gray-600'
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}