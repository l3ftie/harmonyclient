import { useEffect, useState } from "react";
import styled from "styled-components";
import gifyHero from "../assets/images/giphy.gif";
import bgImage from "../assets/images/image3.jpg";
import ImageHeader from "../components/ImageHeader";
import { servicesOffered } from "../utils/textContent";

const colorArray = [
  { id: 1, color: "#73c653" },
  { id: 2, color: "#f05a5d" },
  { id: 3, color: "#346fd8" },
  { id: 4, color: "#a56cef" },
  { id: 5, color: "#efce5b" },
];

const Services = () => {
  const [hex, setHex] = useState(colorArray[0].color);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      setHex(colorArray[randomIndex].color);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper>
      <section className="">
        <ImageHeader
          title="Our Care"
          subTitle="What we do here are Harmony"
          bgImage={bgImage}
        />
        {/*  */}
      </section>
      <section>
        <div className="p-4 md:p-0 md:container mx-auto md:flex">
          <div className="flex-1">
            <div className="">
              <h4 className="text-center md:text-left text-2xl md:text-7xl font-black textStyled text-accent ">
                Everything Harmony{" "}
                <span className="bg-secondary p-3 rounded-xl inline-block my-3">
                  Offers{" "}
                </span>
              </h4>
              <p className="text-xl text-accent font-semibold md:w-5/6 my-4">
                We have tailored care plans designed to meet the unique needs of
                each individual. Our trained and experienced carers are
                dedicated to providing compassionate and reliable support.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="md:w-96 md:h-96  rounded-3xl relative">
              <img
                src={gifyHero}
                className="md:absolute rounded-3xl top-0 "
                style={{ zIndex: 1 }}
              />
              <div
                style={{ backgroundColor: `${hex}` }}
                className="md:w-96 md:h-96  md:absolute -bottom-3 rounded-3xl -right-3"
              ></div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section
        id="our-services"
        className="my-28 flex justify-center items-start flex-wrap"
      >
        <div className="container mx-auto">
          <div className={` flex flex-col md:grid md:grid-cols-2 gap-4`}>
            {servicesOffered.map((card, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer hover:shadow-xl hover:scale-105 p-6 rounded-xl transition-all"
                >
                  <div
                    style={{ backgroundColor: `${card.color}` }}
                    className=" w-20 h-20 rounded-xl flex justify-center items-center border border-white mb-3"
                  >
                    <card.icon size={48} color="#0e364d" />
                  </div>
                  <h4 className="text-accent text-3xl font-semibold mb-2 ">
                    {card.service}
                  </h4>
                  <p className="font-medium text-lg">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Services;
const Wrapper = styled.div``;
