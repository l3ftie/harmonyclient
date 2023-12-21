import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { homeLinks } from "../utils/links";
import { upperLinks } from "../utils/textContent";
import Logo from "./Logo";
import UnderLinedBtn from "./UnderLinedBtn";

const GlobalNavigation = () => {
  // create navigation on scroll update
  const navRef = useRef();
  const [isSticky, setIsSticky] = useState(false);

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
        <div className={`w-full bg-accent`}>
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
      <div className="hidden sm:hidden lg:flex justify-between md:py-4 container mx-auto">
        <Link>
          <Logo small />
        </Link>
        <div className="flex ">
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
        <div>
          <UnderLinedBtn shadowed title="Make An Appointment" />
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
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
`;
