"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [hasLogo, setHasLogo] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showProjectsSubmenu, setShowProjectsSubmenu] = useState(false);
  const [showAziziSubmenu, setShowAziziSubmenu] = useState(false);
    const [showEllingtonSubmenu, setShowEllingtonSubmenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleProjectsSubmenu = () =>
    setShowProjectsSubmenu(!showProjectsSubmenu);
  const toggleAziziSubmenu = () => setShowAziziSubmenu(!showAziziSubmenu);

  const path = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 81) {
        setHasLogo(true);
      } else {
        setHasLogo(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          hasLogo ? "has-logo navbar-wrap " : "no-logo navbar-wrap sticky-top "
        }
      >
        <div className="container-lg mt-5 nav-container position-absolute hidden md:block lg:block ">
          <nav className="custom-navbar justify-center  navbar-expand-lg ml-16">
            <div>
              <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-20 ">
                <ul className="flex items-center justify-center gap-x-5">
                  <li>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="/"
                      role="button"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="/about"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="/#teamwork"
                    >
                      Teamwork
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-brand pe-3 pe-sm-4 py-0" href="/">
                      <Image
                        className="logo-dark"
                        src="/assets/img/logo2.png"
                        alt="logo-white"
                        width={100}
                        height={50}
                        loading="eager"
                      />
                      <Image
                        className="logo-white"
                        src="/assets/img/logo2.png"
                        alt="logo-white"
                        width={100}
                        height={50}
                        loading="eager"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white text-xl hover:text-yellow-500"
                      href="/#properties-list"
                    >
                      Properties
                    </Link>
                  </li>

                  <li className="relative">
                    <span
                      className="text-white text-xl hover:text-yellow-500 cursor-pointer flex flex-row justify-center items-center"
                      onClick={toggleProjectsSubmenu}
                    >
                      Projects <IoIosArrowDown style={{ color: "#DEB657" }} />
                    </span>

                    {showProjectsSubmenu && (
                      <ul className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg rounded-md">
                        <li>
                          <Link
                            className="flex flex-row items-center gap-x-1 px-4 py-2 text-black font-bold hover:text-yellow-500"
                            href="/azizidevelopments"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleAziziSubmenu();
                            }}
                          >
                            Azizi Developments
                            <IoIosArrowDown style={{ color: "#DEB657" }} />
                          </Link>
                          {showAziziSubmenu && (
                            <ul className="mt-2 ml-4 italic">
                              <li>
                                <Link
                                  className="block px-4 py-2 text-black "
                                  href="/azizidevelopments"
                                >
                                  About Azizi
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block px-4 py-2 text-black hover:text-yellow-500"
                                  href="/aziziriviera"
                                >
                                  Azizi Riveira
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block px-4 py-2 text-black hover:text-yellow-500"
                                  href="/azizivenice"
                                >
                                  Azizi Venice
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block px-4 py-2 text-black hover:text-yellow-500"
                                  href="/azizimina"
                                >
                                  Azizi Mina
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block px-4 py-2 text-black hover:text-yellow-500"
                                  href="/azizialiyah"
                                >
                                  Azizi Aliya
                                </Link>
                              </li>
                            </ul>
                          )}
                          <Link
                            className="flex flex-row items-center gap-x-1 px-4 py-2 text-black font-bold hover:text-yellow-500"
                            href="/ellington"
                           
                          >
                            Ellington Properties
                            {/* <IoIosArrowDown style={{ color: "#DEB657" }} /> */}
                          </Link>
                          {/* {showEllingtonSubmenu && (
                            <ul className="mt-2 ml-4 italic">
                              <li>
                                <Link
                                  className="block px-4 py-2 text-black "
                                  href="/azizidevelopments"
                                >
                                  About Ellington
                                </Link>
                              </li>
                            </ul>
                          )} */}
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
        </div>
        <div className="md:hidden  lg:hidden flex absolute bg-white rounded-md m-2 p-2 w-[95%]  justify-between items-end">
          <div className="  ">
            <Link className="navbar-brand " href="/">
              <Image
                width={70}
                height={100}
                className="logo-dark "
                src="/assets/img/logo2.png"
                alt=""
                loading="eager"
              />
            </Link>
          </div>
          <div>
            <span onClick={toggleMenu}>
              <FiMenu size={40} />
            </span>
          </div>
        </div>

        {showMenu && (
          <div className="md:hidden  lg:hidden  absolute bg-white rounded-md m-2  w-[95%]">
            <div className=" flex  justify-between rounded-md   bg-white">
              <div className="pt-2 px-2 ">
                <Link className="navbar-brand " href="/">
                  <Image
                    width={100}
                    height={50}
                    className="logo-dark"
                    src="/assets/img/logo2.png"
                    alt=""
                    loading="eager"
                  />
                </Link>
              </div>
              <div className=" mr-2 pt-2 ">
                <span onClick={toggleMenu}>
                  <MdClose size={40} />
                </span>
              </div>
            </div>

            <div className="flex flex-col  gap-6  text-xl font-semibold hover:text-black text-gray-600">
              <ul className="flex flex-col  gap-6 px-10 p-6  ">
                <li>
                  <Link
                    className="text-xl  text-black hover:text-yellow-500"
                    href="/"
                    role="button"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl  text-black hover:text-yellow-500"
                    href="/about"
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl  text-black hover:text-yellow-500"
                    href="/#teamwork"
                  >
                    Teamwork
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-black text-xl hover:text-yellow-500"
                    href="/#properties-list"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <span
                    className="text-xl text-black hover:text-yellow-500 cursor-pointer"
                    onClick={toggleProjectsSubmenu}
                  >
                    Projects
                  </span>
                  {showProjectsSubmenu && (
                    <ul className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg rounded-md">
                      <li>
                        <Link
                          className="flex flex-row items-center gap-x-1 px-4 py-2 text-black font-bold hover:text-yellow-500"
                          href="/azizidevelopments"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleAziziSubmenu();
                          }}
                        >
                          Azizi Developments
                          <IoIosArrowDown style={{ color: "#DEB657" }} />
                        </Link>
                        {showAziziSubmenu && (
                          <ul className="mt-2 ml-4 italic">
                            <li>
                              <Link
                                className="block px-4 py-2 text-black "
                                href="/azizidevelopments"
                              >
                                About Azizi
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="block px-4 py-2 text-black hover:text-yellow-500"
                                href="/aziziriviera"
                              >
                                Azizi Riveira
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="block px-4 py-2 text-black hover:text-yellow-500"
                                href="/azizivenice"
                              >
                                Azizi Venice
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="block px-4 py-2 text-black hover:text-yellow-500"
                                href="/azizimina"
                              >
                                Azizi Mina
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="block px-4 py-2 text-black hover:text-yellow-500"
                                href="/azizialiyah"
                              >
                                Azizi Aliya
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    className="text-xl  text-black hover:text-yellow-500"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
