import React from 'react';
import logo from '../assets/logo-text.png';

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Technologies', href: '#technologies' },
      { label: 'Projects', href: '#projects' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: '#github' },
  { label: 'Twitter', href: '#twitter' },
  { label: 'LinkedIn', href: '#linkedin' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop / Multi-column Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
          {/* Brand Block */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center cursor-pointer">
              <img src={logo} alt="Dev Stack" className="h-8 object-contain" />
            </div>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-5 text-sm font-medium text-gray-700 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-gray-900 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile View Stack */}
        <div className="md:hidden flex flex-col items-center text-center pb-10 border-b border-gray-100 space-y-4">
          <img src={logo} alt="Dev Stack" className="h-8 object-contain" />
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
            {SOCIAL_LINKS.map((social, index) => (
              <React.Fragment key={social.label}>
                <a href={social.href} className="hover:text-orange-500 transition-colors">
                  {social.label}
                </a>
                {index < SOCIAL_LINKS.length - 1 && <span className="text-gray-300">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}