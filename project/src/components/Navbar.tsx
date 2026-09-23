import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { navigate } from '@/hooks/useRouter';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'How it Works', href: '#loop' },
  { label: 'For Athletes', href: '#twin' },
  { label: 'For Coaches', href: '#coaches' },
  { label: 'Science', href: '#science' },
  { label: 'Pricing', href: '#pricing' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line/60 bg-surface-0/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#" aria-label="Athlix home" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => navigate('login')}
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Sign In
          </button>
          <Button size="sm" href="#cta">
            Get Early Access
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-white/70 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line/40 bg-surface-0/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-line/40 pt-3">
            <button
              onClick={() => { setOpen(false); navigate('login'); }}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-white/60 hover:text-white"
            >
              Sign In
            </button>
            <Button size="md" href="#cta" className="w-full" >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
