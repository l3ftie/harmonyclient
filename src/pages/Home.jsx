import { BiHealth } from "react-icons/bi";
import { BsActivity, BsHeartPulse, BsHouseHeart } from "react-icons/bs";
import { ImPlus } from "react-icons/im";
import { RiDoubleQuotesR } from "react-icons/ri";
import styled from "styled-components";
import bgColor from "../assets/images/Blue_BG.jpg";
import clues from "../assets/images/clues.png";
import blueStrip from "../assets/images/footer.png";
import bgImage from "../assets/images/formbg.jpg";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import Slider from "../components/Slider";
import UnderLinedBtn from "../components/UnderLinedBtn";

import { useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import QuestionGroup from "../components/QuestionGroup";
import { fqas, points } from "../utils/textContent";

const Home = () => {
  const navigation = useNavigate();
  return (
    <Wrapper>
      <Slider />
      <section className="pb-24 relative">
        <div
          style={{
            backgroundImage: `url(${bgColor})`,
            backgroundPosition: "bottom",
          }}
          className=" px-8 py-24 "
        >
          <h4 className="text-4xl text-blue-50 text-center textStyled font-bold py-4">
            Why Harmony Home Health?
          </h4>
          <h3 className="text-center artisticText text-7xl font-black text-blue-50">
            THE PASSION
          </h3>
        </div>
        <div className="container mx-auto p-3 -mt-12 grid md:grid-cols-3 gap-5 ">
          <div
            style={{
              backgroundImage: `url(${image1})`,
            }}
            className=" relative bg-cover rounded-xl border-4 border-blue-50 overflow-hidden"
          >
            <div className=" px-6 py-12 w-full h-full top-0 right-0  bg-[#00000090] hover:bg-[#003f0e30] transition-all">
              <div className="relative flex justify-center mb-5">
                <ImPlus color="#72e98c" size={88} />
                <BsHouseHeart size={55} className="absolute top-1/3" />
              </div>

              <div className="bg-[#72e98c] -mx-6 py-2 mb-4">
                <h3 className="text-center textStyled text-accent text-3xl">
                  Home care
                </h3>
              </div>
              <p className=" text-blue-50 font-medium my-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae atque, est iure soluta accusamus beatae, earum illo
                adipisci officiis omnis veritatis quibusdam. Eaque iusto,
                suscipit blanditiis necessitatibus omnis explicabo. Saepe
                excepturi ratione libero facilis.
              </p>
              <div className="flex justify-center mt-5">
                <UnderLinedBtn
                  action={() => navigation("services")}
                  shadowed
                  title="Read more"
                  accentColor="#72e98c"
                />
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${image2})`,
            }}
            className="relative bg-cover rounded-xl border-4 border-blue-50 overflow-hidden"
          >
            <div className="  px-6 py-12 w-full h-full top-0 right-0 bg-[#00000090]  hover:bg-[#00152950] transition-all">
              <div className="relative flex  justify-center mb-5">
                <ImPlus color="#0085fe" size={88} />
                <BsHeartPulse size={55} className="absolute top-1/3" />
              </div>

              <div className="bg-[#0085fe] -mx-6 py-2 mb-4">
                <h3 className="text-center textStyled text-accent text-3xl">
                  Senior care
                </h3>
              </div>
              <p className=" text-blue-50 font-medium my-8 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae atque, est iure soluta accusamus beatae, earum illo
                adipisci officiis omnis veritatis quibusdam. Eaque iusto,
                suscipit blanditiis necessitatibus omnis explicabo. Saepe
                excepturi ratione libero facilis.
              </p>
              <div className="flex justify-center mt-5">
                <UnderLinedBtn
                  action={() => navigation("services")}
                  shadowed
                  title="Read more"
                  accentColor="#0085fe"
                />
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${image3})`,
            }}
            className=" relative bg-cover rounded-xl border-4 border-blue-50 overflow-hidden"
          >
            <div className="  px-6 py-12 w-full h-full top-0 right-0 bg-[#00000090] hover:bg-[#332d0090]  transition-all">
              <div className="relative flex justify-center mb-5">
                <ImPlus color="#fee830" size={88} />
                <BsActivity size={55} className="absolute top-1/3" />
              </div>
              <div className="bg-[#fee830] -mx-6 py-2 mb-4">
                <h3 className="text-center textStyled text-accent text-3xl">
                  Intensive care
                </h3>
              </div>
              <p className=" text-blue-50 font-medium my-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae atque, est iure soluta accusamus beatae, earum illo
                adipisci officiis omnis veritatis quibusdam. Eaque iusto,
                suscipit blanditiis necessitatibus omnis explicabo. Saepe
                excepturi ratione libero facilis.
              </p>
              <div className="flex justify-center mt-5">
                <UnderLinedBtn
                  action={() => navigation("services")}
                  shadowed
                  title="Read more"
                  accentColor="#fee830"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="p-2 md:p-0 md:container md:mx-auto md:flex pb-16">
        <div
          className="flex-1  bg-no-repeat bg-right-top"
          style={{
            backgroundImage: `url(${clues})`,
            backgroundSize: "20%",
          }}
        >
          <h4 className=" text-6xl text-accent textStyled font-bold py-4">
            Harmony Health Home
          </h4>
          <h4 className="artisticText text-7xl font-black text-accent">
            THE CALLING
          </h4>
          <div className="w-3/4 my-8">
            <div className="relative mb-6">
              <RiDoubleQuotesR
                size={48}
                color="#0e364d"
                className="absolute -top-1 left-0"
              />
              <p className="pt-3 text-accent font-bold">
                <span className="ml-12">At</span> Harmony Home Health, our
                mission is to provide unparalleled care and support to
                individuals in need, fostering an environment of well-being,
                dignity, and independence.
              </p>
            </div>
            {points &&
              points.map((item) => {
                const { id, title, point } = item;
                return (
                  <div className="flex items-center gap-4 mb-3" key={id}>
                    <BiHealth color="#0e364d" size={24} />
                    <div>
                      <h4 className="textStyled  text-secondary">{title}</h4>
                      <p className="text-accent font-medium">{point}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex-1 flex flex-col ">
          <div className="lg:h-28"></div>
          <QuestionGroup data={fqas} />
        </div>
      </section>
      {/*  */}
      <section className="py-20">
        <>
          <div
            style={{ backgroundImage: `url(${blueStrip})` }}
            className="h-20"
          />
          <div
            style={{
              backgroundImage: `url(${blueStrip})`,
              transform: "rotate(180deg)",
            }}
            className="h-20"
          />
        </>
        {/* separator */}
        <div className="pt-24">
          <div className="md:container mx-auto">
            <ContactForm bgImage={bgImage} />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;
