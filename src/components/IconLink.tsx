import clsx from 'clsx';
import { btnColors } from 'commonClasses';

interface IconLinkProps extends React.ComponentPropsWithoutRef<'a'> {
    children: React.ReactNode;
    external?: boolean;
}
export default function IconLink({ className, external, ...props }: IconLinkProps) {
    return (
        <a
            className={clsx('p-2 rounded-md', btnColors, 'text-2xl ', className)}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
            {...props}
        >
            {props.children}
        </a>
    );
}
