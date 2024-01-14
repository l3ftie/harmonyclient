import { useEffect, useRef, useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { homeLinks } from "../utils/links";
import { upperLinks } from "../utils/textContent";
import Logo from "./Logo";
import UnderLinedBtn from "./UnderLinedBtn";

const GlobalNavigation = () => {
  // create navigation on scroll update
  const navRef = useRef();

  const navigation = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper
      className={`${
        isSticky
          ? "fixed right-0 left-0 top-0 transition-all bg-blue-50 bg-opacity-90"
          : "absolute right-0 left-0 top-0 transition-all"
      }  z-10`}
    >
      {upperLinks ? (
        <div className={`w-full bg-accent hidden md:block`}>
          <div className="py-2 text-center container mx-auto">
            {upperLinks.map((item) => {
              const { id, name, link } = item;
              return (
                <Link className="text-blue-50" key={id} to={link}>
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* transitional navigation content based on scroll movement */}
      <div className="flex justify-between p-2 md:py-4 container mx-auto">
        <Link className="isMobile">
          <Logo small />
        </Link>
        <div className=" hidden md:flex">
          {homeLinks.map((link) => {
            const { id, path, text } = link;
            return (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {text}
              </NavLink>
            );
          })}
        </div>
        <div className="hidden md:block">
          <UnderLinedBtn
            shadowed
            title="Make An Appointment"
            action={() => navigation("appointments")}
          />
        </div>
        {/* mobile */}
        <div className="sm:hidden items-center justify-center flex">
          <div onClick={() => setView(true)}>
            <IoMenu size={34} />
          </div>
        </div>
        {/* div for navLinks */}
        <div
          className={`bg-blue-50 fixed top-0 bottom-0 right-0 left-0 ${
            view ? "" : "-translate-x-full"
          } transition-all sm:hidden`}
        >
          <div className="grid justify-end mt-5 mr-3">
            <button type="button" onClick={() => setView(false)}>
              <IoCloseSharp size={34} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-4">
            {homeLinks.map((link) => {
              const { id, path, text } = link;
              return (
                <div
                  key={id}
                  // to={path}
                  onClick={() => {
                    navigation(path);
                    setView(false);
                  }}
                  className="text-2xl"
                >
                  {text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default GlobalNavigation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10;

  @media (max-width: 992px) {
    /* padding-top: 2rem; */
    display: flex;
    flex-direction: column;

    .isMobile {
      height: 80px;
      width: 100px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
