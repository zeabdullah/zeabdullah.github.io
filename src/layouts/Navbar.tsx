import { useState } from 'react';
import clsx from 'clsx';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri/index.js';
import { NavLink } from '@components/NavLink';
import { navAndFooterCls, navBtnCls } from 'commonClasses';
import ThemeToggler from '@components/ThemeToggler';

export default function Navbar(): JSX.Element {
    const [mobileNavActive, setMobileNavActive] = useState(false);

    const toggleNavCollapse = () => setMobileNavActive(!mobileNavActive);
    const hideMobileNav = () => setMobileNavActive(false);

    const NavCollapseToggler = (
        <button
            title="Menu"
            aria-label="Menu"
            className={clsx(navBtnCls, 'sm:hidden', 'text-2xl')}
            onClick={toggleNavCollapse}
        >
            {mobileNavActive ? <RiCloseLine /> : <RiMenuFill />}
        </button>
    );

    return (
        <>
            <div className={clsx('SPACER', 'h-20')} />
            <nav
                id="navbar"
                className={clsx(
                    'fixed z-10 top-0 min-w-full',
                    'flex justify-between items-center flex-wrap',
                    mobileNavActive ? 'bg-neutral-100' : 'bg-light',
                    'bg-opacity-90 backdrop-blur-md',
                    'dark:bg-dark/95 dark:text-light',
                    'border-b',
                    navAndFooterCls,
                )}
            >
                <div className="flex-grow">
                    <NavLink
                        href="/"
                        aria-label="Home"
                        title="This means home, smartypants."
                        className="text-xl"
                    >
                        ../
                    </NavLink>
                </div>

                <span className="space-x-4">
                    <ThemeToggler />
                    {NavCollapseToggler}
                </span>
                <div
                    className={clsx(
                        mobileNavActive
                            ? 'flex flex-col justify-between items-stretch gap-4 basis-full'
                            : 'hidden',
                        'sm:flex sm:flex-row sm:items-center sm:gap-1 sm:basis-auto',
                        'mt-8 sm:mt-auto',
                    )}
                >
                    <NavLink href="#header" onClick={hideMobileNav} children="Intro" />
                    <NavLink href="#projects" onClick={hideMobileNav} children="Projects" />
                    <NavLink href="#tech" onClick={hideMobileNav} children="Technologies" />
                    <NavLink href="#resume" onClick={hideMobileNav} children="Resume" />
                </div>
            </nav>
        </>
    );
}
