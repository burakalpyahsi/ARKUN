"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '@/assets/logo.svg';

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#features', label: t('nav.capabilities') },
        { href: '#modules', label: t('nav.modules') },
        { href: '#pricing', label: t('nav.access') },
        { href: '/dashboards', label: t('nav.dashboards') },
    ];

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-teal-900/95 backdrop-blur-md border-b border-teal-400/10' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group z-10">
                    <Image src={Logo} alt="ARKUN Logo" className="h-4 sm:h-5 w-auto group-hover:opacity-80 transition-opacity" />
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-white">ARKUN</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-teal-100 hover:text-accent transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <LanguageSwitcher />
                    <Button variant="default" size="sm" className="bg-accent text-teal-900 hover:bg-teal-400 font-bold border border-transparent hover:shadow-[0_0_20px_rgba(29,228,222,0.4)]">
                        {t('nav.requestDemo')}
                    </Button>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-2">
                    <LanguageSwitcher />
                    <button
                        className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-teal-900/98 border-t border-teal-700 animate-in slide-in-from-top-2 duration-200">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className="text-teal-100 hover:text-accent hover:bg-white/5 transition-colors text-base font-medium tracking-wide py-3 px-4 rounded-lg"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-3 mt-2 border-t border-teal-700">
                            <Button
                                variant="default"
                                className="w-full bg-accent text-teal-900 hover:bg-teal-400 font-bold h-12"
                                onClick={closeMobileMenu}
                            >
                                {t('nav.requestDemo')}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
