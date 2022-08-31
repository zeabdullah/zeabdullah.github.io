import { useState } from 'react';
import clsx from 'clsx';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa/index.js';
import { MdAlternateEmail } from 'react-icons/md/index.js';
import IconLink from '@components/IconLink';
import BtnLink from '@components/BtnLink';
import Section from '@components/Section';
import P from '@components/Typography/P';
import Anchor from '@components/Typography/Anchor';

const sectionLabel = 'header-heading';
export default function Header() {
    const [firstTyperDone, setFirstTyperDone] = useState(false);
    const endFirstTypewriter = () => setFirstTyperDone(true);

    return (
        <Section id="header" role="banner" aria-labelledby={sectionLabel}>
            <h1
                id={sectionLabel}
                className={clsx(
                    'text-3xl sm:text-4xl md:text-5xl font-medium !leading-snug',
                    'max-w-xl md:max-w-3xl',
                    'mb-12 md:mb-16',
                )}
            >
                <strong
                    className={clsx(
                        'block',
                        'font-extrabold text-4xl sm:text-5xl md:text-6xl',
                        'mb-4',
                    )}
                >
                    {firstTyperDone ? (
                        <>I'm Abdullah.</>
                    ) : (
                        <>
                            I'm{' '}
                            <Typewriter
                                options={{ delay: 80 }}
                                onInit={typewriter => {
                                    typewriter
                                        .pauseFor(500)
                                        .typeString('Abdullah.')
                                        .pauseFor(500)
                                        .callFunction(endFirstTypewriter)
                                        .start();
                                }}
                            />
                        </>
                    )}
                </strong>
                A dev with a passion to{' '}
                {firstTyperDone && (
                    <Typewriter
                        options={{ delay: 100, deleteSpeed: 30 }}
                        onInit={typewriter => {
                            typewriter
                                .pauseFor(250)
                                .typeString('make the web a nicer...')
                                .pauseFor(1500)
                                .deleteChars(8)
                                .typeString('cooler...')
                                .pauseFor(1000)
                                .deleteChars(9)
                                .typeString('greater place.')
                                .start();
                        }}
                    />
                )}
            </h1>
            <article>
                <P>
                    I'm a developer with over a year of experience. I like to make awesome
                    things on the web and see people enjoy and benefit from them.
                </P>
                <P>
                    As a current software engineer at{' '}
                    <Anchor href="https://distin-gui.com" external>
                        Distin-Gui
                    </Anchor>
                    , I work on creating web experiences for clients small and large.
                </P>
                <P>
                    Frontend development is my focus, and I love to develop some CLI projects
                    on the side for fun. I've also been recently interested in reading books
                    about software development, such as{' '}
                    <Anchor
                        href="https://www.oreilly.com/library/view/the-clean-coder/9780132542913"
                        external
                    >
                        Clean Coder
                    </Anchor>{' '}
                    <em>(highly recommend btw).</em>
                </P>
            </article>
            <Socials />
        </Section>
    );
}

const linkedinLabel = 'LinkedIn';
const githubLabel = 'GitHub';

const Socials: React.FC = () => (
    <div className={clsx('flex gap-2 flex-wrap', 'mt-16')}>
        <div className="contents mr-8">
            <IconLink
                href="https://github.com/abdullahzeidan"
                aria-label={githubLabel}
                title={githubLabel}
                external
            >
                <FaGithub role="img" aria-label={githubLabel} />
            </IconLink>
            <IconLink
                href="https://www.linkedin.com/in/abdullah-z-b4653a213/"
                aria-label={linkedinLabel}
                title={linkedinLabel}
                external
            >
                <FaLinkedin role="img" aria-label={linkedinLabel} />
            </IconLink>
        </div>

        <BtnLink href="mailto:abdullahzeidan@gmail.com">
            <MdAlternateEmail /> Email Me
        </BtnLink>
    </div>
);
