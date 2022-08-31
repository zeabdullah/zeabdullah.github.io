import clsx from 'clsx';

export const btnColors = clsx(
    'text-neutral-600 hover:text-dark',
    'dark:text-neutral-400 dark:hover:text-light dark:focus:text-light',
    'hover:bg-neutral-200 focus:bg-neutral-200',
    'dark:hover:bg-opacity-10 dark:focus:bg-opacity-10',
);

export const navItemCls = clsx(btnColors, 'px-5 py-2', 'rounded-md');

export const navBtnCls = clsx(navItemCls, 'p-2', 'text-neutral-600 hover:text-dark');

export const navAndFooterCls = clsx(
    'px-3.5 py-4',
    'border-neutral-200 dark:border-opacity-10',
    'transition-[background-color] duration-300',
);
