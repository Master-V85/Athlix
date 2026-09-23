import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const footerNav = {
  Product: ['Product', 'How it Works', 'For Athletes', 'For Coaches', 'Science', 'Pricing'],
  Company: ['About', 'Careers', 'Contact', 'Blog'],
  Legal: ['Privacy', 'Terms', 'Data Processing', 'Security'],
};

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Linkedin, label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line/60 bg-surface-0">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              Human performance, intelligently orchestrated.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-200/50 text-white/50 transition-all hover:border-accent/30 hover:text-accent"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerNav).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">{heading}</h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-white/55 transition-colors hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/40 pt-8 sm:flex-row">
          <p className="text-xs text-white/35">© 2026 Athlix. All rights reserved.</p>
          <p className="text-xs text-white/35">
            AI-guided performance. Decisions grounded in data. Not a medical device.
          </p>
        </div>
      </div>
    </footer>
  );
}
