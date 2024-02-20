import React from "react";
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const actions = [
  {
    title: '24*7 Availability',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    paragraph: 'Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
  },
  {
    title: 'Verified By Customers',
    href: '#',
    icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    paragraph: 'Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
  },
  {
    title: 'Schedule a one-on-one',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    paragraph: 'Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
  },
  {
    title: 'Responsible Sourcing',
    href: '#',
    icon: BanknotesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    paragraph: 'Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function WhyUs() {
  return (
    <div id="services" className="pt-20 pb-1 iPhone4and4S:pt-12 iPad1and2andMiniandAir:pt-12">
      <h1 className="text-5xl font-serif ml-5 mb-14 iPhone4and4S:mb-8 iPad1and2andMiniandAir:mb-9">Why Us</h1>      
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">{action.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}