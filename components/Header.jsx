import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { Menu } from '@headlessui/react';

const navLinks = [
  {
    id: 1,
    link: 'home',
    href: '',
  },
  {
    id: 2,
    link: 'about',
    href: 'about',
  },
  {
    id: 3,
    link: 'article request',
    href: 'article',
  },
  {
    id: 4,
    link: 'search',
    href: 'search',
  },
  {
    id: 5,
    link: 'contact',
    href: 'contact',
  },
];

const Header = () => {
  const { data: session, status } = useSession();
  const { push, asPath } = useRouter();
  const [hideNavItems, setHideNavItems] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 825) {
        // Change the width value to your desired breakpoint
        setHideNavItems(true);
      } else {
        setHideNavItems(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSignIn = () => {
    push(`/auth/signIn?callbackurl=${asPath}`);
  };

  const handleSignOut = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: '/auth/signIn',
    });
    push(data.url);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className=" w-5/6 bg-white backdrop-filter   mx-auto flex justify-between items-center ">
        {/* logo */}
        <a href={'/'} className=" ">
          <svg
            width="507.1300079345703"
            height="108.72541117614547"
            viewBox="0 0 389.66666666666663 83.54202648650497"
            className="css-1j8o68f w-56"
          >
            <defs id="SvgjsDefs1312"></defs>
            <g
              id="SvgjsG1313"
              featurekey="xG21Y3-0"
              transform="matrix(0.8567176357186833,0,0,0.8567176357186833,18.800595228290884,8.57923744626821)"
              fill="#ffaa64"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M30.1,42.5l2.7-12.4c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.4-0.2H10l-1.2-4.4c-0.1-0.4-0.5-0.7-0.9-0.7H2.4  c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1h4.7c0,0,5.6,20.3,5.7,20.4c-0.2,0.4-0.3,0.8-0.3,1.2c0,1.5,1.2,2.7,2.7,2.7s2.7-1.2,2.7-2.7  c0-0.3,0-0.5-0.1-0.8h8.7c-0.1,0.2-0.1,0.5-0.1,0.8c0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7c0-1.3-1-2.4-2.2-2.7  c-0.1-0.1-15.2-0.1-15.2-0.1l-0.7-2.4h15.9C29.8,42.9,30,42.7,30.1,42.5z M29.1,47c0.6,0,1,0.5,1,1c0,0.6-0.5,1-1,1  c-0.6,0-1-0.5-1-1C28.1,47.4,28.6,47,29.1,47z M15.2,47c0.6,0,1,0.5,1,1c0,0.6-0.5,1-1,1c-0.6,0-1-0.5-1-1  C14.2,47.4,14.7,47,15.2,47z"
              ></path>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M98.6,72.4c-0.3-1.3-0.3-3.4-0.3-5.8c0-7.7,0.1-19.4-8.8-33.3c0,0,0,0,0,0l-5.4-8.5c-0.9-1.5-2.4-2.5-4.1-2.9  c-1.7-0.4-3.5-0.1-5,0.9c0,0-0.1,0-0.1,0.1c-0.9,0.6-1.6,1.3-2.1,2.2c-0.8-0.6-1.7-1-2.6-1.2c-1.8-0.4-3.6-0.1-5.1,0.9  c-0.1,0-0.1,0.1-0.2,0.1c-1.1,0.8-2,1.8-2.5,3.1c-1.9-0.9-4.2-0.8-6.1,0.3c-0.1,0-0.2,0.1-0.3,0.1c-0.8,0.5-1.5,1.2-2,2l-8.7-13.7  c-1-1.6-2.7-2.8-4.6-3.2c-1.9-0.4-3.8-0.1-5.5,1c0,0,0,0-0.1,0.1c0,0-0.1,0-0.1,0c-1.6,1-2.8,2.7-3.2,4.6c-0.4,1.9-0.1,3.8,1,5.5  l14.5,22.9c-0.7,0.3-1.4,0.8-2.1,1.3c-0.3,0.2-0.7,0.5-1,0.7c0,0,0,0,0,0c-1.7,1.1-2.9,2.8-3.4,4.8s-0.1,4.1,1,5.8l5.1,8  c0.1,0.1,0.2,0.3,0.3,0.4c6.1,8.5,13.7,10.7,18.8,12.2c1.4,0.4,2.6,0.8,3.5,1.2c0.2,0.1,0.3,0.1,0.5,0.1c0,0,0,0,0,0  c2.4,0.5,3.1,1.7,4.4,3.8l0.5,0.7c0.4,0.6,1,0.9,1.7,0.9c0.4,0,0.7-0.1,1.1-0.3c0.9-0.6,1.2-1.8,0.6-2.7l-0.4-0.7  c-1.4-2.3-2.9-4.7-6.9-5.6c0,0,0,0,0,0c-1.1-0.5-2.3-0.8-3.8-1.2c-5.2-1.5-12.2-3.6-17.7-12.3l0,0L45.4,58c-0.5-0.8-0.7-1.8-0.5-2.8  c0.2-1,0.8-1.8,1.6-2.3c0,0,0,0,0,0c0.4-0.3,0.8-0.5,1.1-0.8c0.7-0.5,1.7-1.1,1.9-1.2c0,0,0.1,0.1,0.4,0.4l5.9,9.3  c0.4,0.6,1,0.9,1.7,0.9c0.4,0,0.7-0.1,1.1-0.3c0.9-0.6,1.2-1.8,0.6-2.7l-5.9-9.3c0,0,0,0,0,0c0,0,0,0,0,0l-17-26.7  c-0.5-0.7-0.6-1.6-0.4-2.5c0.2-0.9,0.7-1.6,1.5-2.1c0,0,0,0,0.1-0.1c0,0,0.1,0,0.1,0c0.7-0.5,1.6-0.6,2.5-0.4  c0.9,0.2,1.6,0.7,2.1,1.5l12,18.9l0,0l0,0l5.6,8.8c0.4,0.6,1,0.9,1.7,0.9c0.4,0,0.7-0.1,1.1-0.3c0.9-0.6,1.2-1.8,0.6-2.7l-5.6-8.8  c-0.8-1.3-0.4-3,0.9-3.9c0,0,0,0,0,0c1.3-0.8,3-0.4,3.9,0.9l5.6,8.8c0.4,0.6,1,0.9,1.7,0.9c0.4,0,0.7-0.1,1.1-0.3  c0.9-0.6,1.2-1.8,0.6-2.7L66.5,32c0,0,0,0,0,0c-0.4-0.6-0.5-1.4-0.4-2.1c0.2-0.7,0.6-1.4,1.2-1.8c0,0,0,0,0,0  c0.6-0.4,1.4-0.5,2.1-0.4c0.7,0.2,1.4,0.6,1.8,1.2l1.9,2.9c0,0,0,0,0,0c0,0,0,0,0,0l3.8,5.9c0.4,0.6,1,0.9,1.7,0.9  c0.4,0,0.7-0.1,1.1-0.3c0.9-0.6,1.2-1.8,0.6-2.7l-3.8-5.9l0,0c-0.4-0.6-0.5-1.3-0.3-2c0.2-0.7,0.6-1.3,1.1-1.6c0,0,0,0,0,0  c0.6-0.4,1.3-0.5,2-0.3c0.7,0.2,1.3,0.6,1.6,1.1l5.4,8.5c8.3,13,8.2,24,8.2,31.2c0,2.8,0,5,0.4,6.7c0.2,0.9,1,1.5,1.9,1.5  c0.2,0,0.3,0,0.5-0.1C98.2,74.5,98.9,73.4,98.6,72.4z"
              ></path>
            </g>
            <g
              id="SvgjsG1314"
              featurekey="n48U4P-0"
              transform="matrix(3.0950160688612263,0,0,3.0950160688612263,118.72888042241236,12.348813195330123)"
              fill="#ff8264"
            >
              <path d="M8.12 5.720000000000001 c3.0266 0 4.54 1.1733 4.54 3.52 c0 1.3467 -0.64666 2.3466 -1.94 3 c0.88 0.25334 1.5367 0.69668 1.97 1.33 s0.65 1.3967 0.65 2.29 c0 1.28 -0.46334 2.29 -1.39 3.03 s-2.1434 1.11 -3.65 1.11 l-6.92 0 l0 -14.28 l6.74 0 z M7.72 11.5 c1.2667 0 1.9 -0.56666 1.9 -1.7 c0 -1.0933 -0.70666 -1.64 -2.12 -1.64 l-2.98 0 l0 3.34 l3.2 0 z M7.9 17.56 c1.5333 0 2.3 -0.62666 2.3 -1.88 c0 -1.36 -0.74666 -2.04 -2.24 -2.04 l-3.44 0 l0 3.92 l3.38 0 z M18 9.66 l0 5.86 c0 0.8 0.12666 1.42 0.38 1.86 s0.73334 0.66 1.44 0.66 c0.78666 0 1.35 -0.23334 1.69 -0.7 s0.51 -1.2133 0.51 -2.24 l0 -5.44 l2.84 0 l0 10.34 l-2.7 0 l0 -1.44 l-0.06 0 c-0.70666 1.1467 -1.7667 1.72 -3.18 1.72 c-1.3467 0 -2.31 -0.34334 -2.89 -1.03 s-0.87 -1.7433 -0.87 -3.17 l0 -6.42 l2.84 0 z M35.5 9.66 l0 2.14 l-5.38 6.06 l5.76 0 l0 2.14 l-9.5 0 l0 -2.14 l5.38 -6.06 l-4.98 0 l0 -2.14 l8.72 0 z M45.88 9.66 l0 2.14 l-5.38 6.06 l5.76 0 l0 2.14 l-9.5 0 l0 -2.14 l5.38 -6.06 l-4.98 0 l0 -2.14 l8.72 0 z M54.480000000000004 5.380000000000001 c1.6667 0 3.0666 0.47 4.2 1.41 s1.7867 2.1834 1.96 3.73 l-3.04 0 c-0.10666 -0.70666 -0.46 -1.3 -1.06 -1.78 s-1.2867 -0.72 -2.06 -0.72 c-1.2267 0 -2.18 0.44 -2.86 1.32 s-1.02 2.0734 -1.02 3.58 c0 1.4667 0.34334 2.63 1.03 3.49 s1.6367 1.29 2.85 1.29 c0.90666 0 1.64 -0.27666 2.2 -0.83 s0.90666 -1.3433 1.04 -2.37 l3.04 0 c-0.16 1.8133 -0.81 3.24 -1.95 4.28 s-2.5834 1.56 -4.33 1.56 c-2.0934 0 -3.7866 -0.69 -5.08 -2.07 s-1.94 -3.1634 -1.94 -5.35 c0 -2.2134 0.64 -4.0234 1.92 -5.43 s2.98 -2.11 5.1 -2.11 z M67.36 9.38 c3.0134 0.01334 4.52 0.9933 4.52 2.94 l0 5.48 c0 1.0133 0.12 1.7467 0.36 2.2 l-2.88 0 c-0.10666 -0.32 -0.17332 -0.65334 -0.19998 -1 c-0.84 0.85334 -2 1.28 -3.48 1.28 c-1.08 0 -1.9367 -0.27334 -2.57 -0.82 s-0.95 -1.3067 -0.95 -2.28 c0 -0.94666 0.3 -1.68 0.9 -2.2 c0.61334 -0.54666 1.7267 -0.89332 3.34 -1.04 c1.1467 -0.12 1.8733 -0.27 2.18 -0.45 s0.46 -0.45666 0.46 -0.83 c0 -0.46666 -0.14 -0.81332 -0.42 -1.04 s-0.74666 -0.34 -1.4 -0.34 c-0.6 0 -1.0533 0.12334 -1.36 0.37 s-0.48666 0.64332 -0.54 1.19 l-2.84 0 c0.06666 -1.1333 0.53332 -1.9933 1.4 -2.58 s2.0266 -0.88 3.48 -0.88 z M65 17.06 c0 0.88 0.58 1.32 1.74 1.32 c1.52 -0.01334 2.2866 -0.79334 2.3 -2.34 l0 -1.1 c-0.22666 0.22666 -0.8 0.39332 -1.72 0.49998 c-0.8 0.09334 -1.3867 0.25668 -1.76 0.49002 s-0.56 0.61 -0.56 1.13 z M80.12 9.38 c0.24 0 0.44668 0.03334 0.62002 0.1 l0 2.64 c-0.30666 -0.06666 -0.64666 -0.1 -1.02 -0.1 c-1.8667 0 -2.8 1.1067 -2.8 3.32 l0 4.66 l-2.84 0 l0 -10.34 l2.7 0 l0 1.92 l0.04 0 c0.28 -0.66666 0.72334 -1.2 1.33 -1.6 s1.2633 -0.6 1.97 -0.6 z M85.46000000000001 6.5600000000000005 l0.000019531 3.1 l2.08 0 l0 1.9 l-2.08 0 l0 5.12 c0 0.48 0.08 0.8 0.24 0.96 s0.48 0.24 0.96 0.24 c0.34666 0 0.64 -0.02666 0.88 -0.08 l0 2.22 c-0.4 0.06666 -0.96 0.1 -1.68 0.1 c-1.0933 0 -1.9067 -0.18666 -2.44 -0.56 s-0.8 -1.02 -0.8 -1.94 l0 -6.06 l-1.72 0 l0 -1.9 l1.72 0 l0 -3.1 l2.84 0 z"></path>
            </g>
          </svg>
        </a>
        {/* navlinks */}
        <div
          className={`${
            hideNavItems ? ' hidden' : 'block'
          } flex items-center gap-4`}
        >
          <ul className="flex gap-4 items-center capitalize transition-colors duration-500 divide-neutral-400  text-slate-500">
            {navLinks.map((items) => (
              <li className="hover:text-slate-800 font-semibold" key={items.id}>
                <Link href={`/${items.href}`}>{items.link}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 transition-all duration-500">
            {!session ? (
              <>
                <button
                  onClick={handleSignIn}
                  className="bg-Brand_orange-500 hover:drop-shadow-sm shadow px-4 text-white  py-2 rounded-sm"
                >
                  SignUp
                </button>
                <button className="px-4 py-2 border shadow hover:drop-shadow-sm ">
                  LogIn
                </button>
              </>
            ) : (
              <>
                <Menu as={'div'} className="ml-4 relative cursor-pointer">
                  <Menu.Button>
                    <Image
                      src={session.user?.image}
                      alt="user-profile"
                      width={35}
                      height={35}
                      className="rounded-full object-cover object-center border shadow"
                    />
                  </Menu.Button>
                  <Menu.Items
                    as={'div'}
                    className="flex absolute bottom-[20] p-5 gap-2  border rounded-md  right-0 flex-col"
                  >
                    {['Profile', 'Dashboard', 'Orders'].map((items) => (
                      <Menu.Item as={'div'} className=" w-full" key={items}>
                        {({ active }) => (
                          <Link
                            className={`${
                              active && 'bg-Brand_orange-400 text-white'
                            } capitalize w-full  px-3 py-1 rounded-sm  `}
                            href={`/${items}`}
                          >
                            {items}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                    <Menu.Item as={'div'} className=" w-full">
                      {({ active }) => (
                        <button
                          onClick={handleSignOut}
                          className={`${
                            active && 'bg-Brand_orange-400 text-white'
                          } capitalize text-red-500 hover:text-white font-semibold border-t-2  text-start w-full  px-3 py-1 rounded-sm  `}
                        >
                          Log Out
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </>
            )}
          </div>
        </div>

        {hideNavItems && (
          <div>
            <span onClick={() => setIsClicked(!isClicked)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </div>
        )}
      </nav>
      {isClicked && (
        <div className="w-5/6 transition-all duration-500 pb-8 z-40 bg-white backdrop-filter  md:w-[70%] mx-auto flex justify-between items-center py-4">
          <ul className="flex flex-col gap-4 items-start capitalize transition-colors divide-neutral-400  text-slate-500">
            {navLinks.map((items) => (
              <li
                onClick={() => setIsClicked(!isClicked)}
                className="hover:text-slate-800 font-semibold"
                key={items.id}
              >
                <Link href={`/${items.href}`}>{items.link}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
