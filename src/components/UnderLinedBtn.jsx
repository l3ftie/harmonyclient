import { useState } from "react";

function UnderLinedBtn({
  title,
  color,
  action,
  type,
  hasBg,
  accentColor,
  shadowed,
  noBorder,
  className,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={action}
      type={type ? type : "button"}
      style={{
        boxShadow: shadowed
          ? `  ${accentColor ? accentColor : "#0e364d"} 5px 5px`
          : "",
        borderColor:
          !isHovered && !noBorder
            ? accentColor
              ? accentColor
              : "#0e364d"
            : "#ffffff",
        backgroundColor: hasBg ? hasBg : "white",
      }}
      className={`border-2 py-2 rounded-full px-4  transition-all relative cursor-pointer ${
        className ? className : ""
      }  `}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      <span
        style={{ color: color ? color : "#0e364d" }}
        className={` font-semibold`}
      >
        {title ? title : "Please add text"}
      </span>
    </button>
  );
}

export default UnderLinedBtn;
