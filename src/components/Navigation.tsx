import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Transition } from '@headlessui/react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Trees', href: '#trees' },
  { name: 'Archive', href: '#archive' },
  { name: 'Documentation', href: '#documentation' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/90 fixed w-full z-50 border-b border-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-cyan-400 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <div className="hidden md:block ml-auto">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-800 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors small-caps"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-gray-800 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors small-caps"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
}