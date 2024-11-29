import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../shared/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between p-6" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">BilaBound</span>
            <img className="h-8 w-auto" src="/images/logo.svg" alt="BilaBound" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button variant="primary" size="sm" asChild>
            <Link href="/pricing">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}