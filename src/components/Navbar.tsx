"use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', current: pathname === '/' },
    { name: 'Contact', href: '/contact', current: pathname === '/contact' },
    { name: 'About', href: '/about', current: pathname === '/about' },
  ]

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" className="bg-black bg-opacity-90 flex justify-between w-full fixed shadow z-50">
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-20">
        <div className="relative flex h-10 sm:h-20 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group z-50 relative inline-flex items-center justify-center rounded-md p-1 bg-opacity-30 text-gray-400 hover:bg-fuchsia-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:justify-between w-full">
            <div className="flex flex-shrink-0 items-center">
              <span className='text-xl sm:text-2xl md:text-3xl font-black text-fuchsia-500'>Hoorain ✨</span>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-fuchsia-900 text-white' : 'text-gray-300 hover:bg-fuchsia-700 hover:text-white hover:bg-opacity-40',
                      'rounded-md px-3 py-2 text-sm md:text-base font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <DisclosurePanel transition className="sm:hidden h-96 inline-block absolute transition">
        <div className="absolute left-0 top-0 space-y-1 w-screen h-screen pl-5 pr-20 py-10 bg-black">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-fuchsia-400 text-white' : 'text-gray-300 hover:bg-fuchsia-800 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Navbar;

