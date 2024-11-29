import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Our Mission',
    description: 'To empower African businesses and individuals with reliable, high-performance hosting solutions that enable digital growth and success.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Our Vision',
    description: 'To become the leading web hosting provider in Africa, known for exceptional service, reliability, and innovation.',
    icon: LockClosedIcon,
  },
  {
    name: 'Our Values',
    description: 'We believe in transparency, reliability, customer focus, and continuous innovation to serve our community better.',
    icon: ServerIcon,
  },
];

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - BilaBound</title>
        <meta
          name="description"
          content="Learn about BilaBound's mission to empower Africa's digital future through reliable hosting solutions."
        />
      </Head>

      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About BilaBound</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              BilaBound is dedicated to providing exceptional hosting solutions that empower businesses and individuals across Africa to achieve their digital ambitions.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}