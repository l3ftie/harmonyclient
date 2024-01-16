import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import heroBg from "../assets/images/Buffer_Seniors_BG_2.jpg";

import { useNavigate } from "react-router-dom";
import roundedImg from "../assets/images/Slider_Circle_2.png";
import { sliderData } from "../utils/textContent";
import UnderLinedBtn from "./UnderLinedBtn";

const Slider = () => {
  const navigation = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container bgimage={heroBg}>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <IoIosArrowBack />
      </Arrow>
      <Wrapper slideindex={slideIndex}>
        {sliderData.map((slide) => (
          <Slide key={slide.id}>
            <ImgContainer></ImgContainer>
            <InfoContainer>
              <Title className="textStyled text-accent px-4 md:px-0 md:text-4xl tracking-wide font-bold">
                {slide.title}
              </Title>
              <div className="w-full md:w-2/3">
                <Desc>
                  {slide.desc1}
                  <span className="block">{slide.desc2}</span>
                </Desc>

                {/*  */}
                <div className="flex justify-center gap-4 md:justify-start lg:gap-8 mb-8">
                  <div
                    className="bg-cover w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center p-3"
                    style={{
                      backgroundImage: `url(${roundedImg})`,
                    }}
                  >
                    <span className="text-secondary text-3xl font-serif">
                      +143
                    </span>
                    <p className="text-blue-50 textStyled">Clients</p>
                  </div>
                  <div
                    className="bg-cover w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center p-3 rotate-12"
                    style={{
                      backgroundImage: `url(${roundedImg})`,
                    }}
                  >
                    <span className="text-secondary text-3xl font-serif">
                      +123
                    </span>
                    <p className="text-blue-50 textStyled">Caregivers</p>
                  </div>
                  <div
                    className="bg-cover w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center p-3"
                    style={{
                      backgroundImage: `url(${roundedImg})`,
                    }}
                  >
                    <span className="text-secondary text-3xl font-serif">
                      +53
                    </span>
                    <p className="text-blue-50 textStyled">Dr & Nurses</p>
                  </div>
                </div>
                {/*  */}

                <div className="p-4 md:p-0">
                  <UnderLinedBtn
                    action={() => navigation("appointments")}
                    accentColor="#fee830"
                    shadowed
                    title="Get in touch today!"
                  />
                </div>
              </div>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <IoIosArrowForward />
      </Arrow>
    </Container>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all ease 1.5s;
  transform: translateY(${(props) => props.slideindex * -100}vh);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;

  @media (max-width: 992px) {
    flex: 0;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 50px;
  height: 100vh;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 992px) {
    padding: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  background-image: url(${(props) => props.bgimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Title = styled.h1``;

const Desc = styled.p`
  margin: 30px 0;
  letter-spacing: 2px;
  font-size: 1rem;
  font-weight: 600;
  span {
    color: #0e364d;
    margin-top: 5px;
    font-size: 0.9rem;
  }
  @media (max-width: 992px) {
    padding: 0 15px;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  @media (max-width: 992px) {
    background-color: #fff7f710;
  }
`;

export default Slider;
