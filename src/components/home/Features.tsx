import { WifiIcon, CloudIcon, ShieldCheckIcon, HeadphonesIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Unlimited Bandwidth & Traffic',
    description: 'Never worry about traffic limits. Our unlimited bandwidth ensures your website stays fast and accessible.',
    icon: WifiIcon,
  },
  {
    name: 'Flexible Storage Options',
    description: 'Choose from various SSD storage options to match your needs, with easy scalability as you grow.',
    icon: CloudIcon,
  },
  {
    name: 'Enhanced Security',
    description: 'Keep your website safe with our advanced security features, including free SSL certificates and malware protection.',
    icon: ShieldCheckIcon,
  },
  {
    name: '24/7 Customer Support',
    description: 'Our dedicated support team is always ready to help you with any questions or issues.',
    icon: HeadphonesIcon,
  },
  {
    name: 'Daily Backups',
    description: 'Rest easy knowing your data is automatically backed up every day, with easy restoration options.',
    icon: ArrowPathIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Your Success
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide all the tools and features you need to build and grow your online presence.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}