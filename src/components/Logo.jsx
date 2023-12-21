import logobold from "../assets/images/boldedLogo.svg";
import logoWhite from "../assets/images/logo-white.svg";

const Logo = ({ small, light }) => {
  return (
    <img
      className={`${small ? "h-[50px]" : ""} `}
      src={light ? logoWhite : logobold}
      alt="HHH"
    />
  );
};
export default Logo;
