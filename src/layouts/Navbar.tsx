import { useState } from 'react'
import clsx from 'clsx'
import { RiMenuFill, RiCloseLine } from 'react-icons/ri/index.js'
import { NavLink } from '@components/NavLink'
import { navAndFooterCls, navBtnCls } from 'common/classnames'
import ThemeToggler from '@components/ThemeToggler'

const LINKS = [
    { id: 'l-hero', href: '#', text: 'Intro' },
    { id: 'l-projects', href: '#projects', text: 'Projects' },
    { id: 'l-tech', href: '#tech', text: 'Technologies' },
    { id: 'l-resume', href: '#resume', text: 'Resume' },
]

export default function Navbar(): JSX.Element {
    const [mobileNavActive, setMobileNavActive] = useState(false)

    const toggleNavCollapse = () => setMobileNavActive(!mobileNavActive)
    const hideMobileNav = () => setMobileNavActive(false)

    const NavCollapseToggler = (
        <button
            type='button'
            title='Menu'
            aria-label='Menu'
            className={clsx(navBtnCls, 'sm:hidden', 'text-2xl')}
            onClick={toggleNavCollapse}
        >
            {mobileNavActive ? <RiCloseLine /> : <RiMenuFill />}
        </button>
    )

    return (
        <>
            <div className={clsx('SPACER', 'h-20')} />
            <nav
                id='navbar'
                className={clsx(
                    'fixed z-10 top-0 min-w-full',
                    'flex justify-between items-center flex-wrap sm:flex-no-wrap',
                    mobileNavActive
                        ? 'bg-neutral-100 !bg-opacity-90 dark:!bg-opacity-90'
                        : 'bg-light',
                    'bg-opacity-70 dark:bg-opacity-70 backdrop-blur-[10px]',
                    'dark:bg-dark dark:text-light',
                    'border-b',
                    navAndFooterCls,
                )}
            >
                <div className='flex-grow'>
                    <NavLink
                        href='/'
                        aria-label='Home'
                        className='text-2xl font-extrabold'
                    >
                        {'<Z/>'}
                    </NavLink>
                </div>

                <span className='space-x-4'>
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
                    {LINKS.map(({ text, href, id }) => (
                        <NavLink key={id} href={href} onClick={hideMobileNav}>
                            {text}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </>
    )
}
