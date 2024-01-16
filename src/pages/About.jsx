import { RiDoubleQuotesR } from "react-icons/ri";
import styled from "styled-components";
import aboutImage from "../assets/images/aboutimage2.jpg";
import image2 from "../assets/images/formbg.jpg";
import bgImage from "../assets/images/image3.jpg";
import ImageHeader from "../components/ImageHeader";

const About = () => {
  return (
    <Wrapper>
      <section className="md:pb-20">
        <ImageHeader
          title="About Us"
          subTitle="A little history about us"
          bgImage={bgImage}
        />
        {/*  */}
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="textContainer flex-1 flex flex-col justify-center">
            <h4 className="text-2xl text-center md:text-left md:text-5xl font-black textStyled text-accent">
              At Harmony Health Home
            </h4>
            <div className="p-4 md:p-0 md:w-2/3 my-3">
              <p>
                We’ve spent a great amount of time figuring who we are and what
                inspires us, so that we can better serve our clients and our
                community. Learn more about us, our history and why we do what
                we do.
              </p>
            </div>
          </div>
          <div className="flex-1 relative p-3 md:p-0">
            <img
              src={aboutImage}
              alt="about harmony health home"
              className="rounded-lg md:w-2/3 shadow-2xl"
            />
          </div>
        </div>
      </section>
      {/*  */}
      <section className="md:py-20 p-4 md:p-0">
        <div className="container mx-auto flex flex-col  md:flex-row">
          <div className="md:flex-1 P-6 md:pr-24">
            <p className="pt-16 text-secondary text-3xl font-bold">
              We approach our work with empathy, kindness, and understanding,
              recognizing the unique needs of each individual.
            </p>
            <p className="md:pt-12 text-secondary text-3xl font-bold">
              We work collaboratively with families, healthcare professionals,
              and the community to create a comprehensive support network for
              our clients.
            </p>
          </div>
          <div className="flex-1">
            <h4 className=" text-xl md:text-5xl font-black textStyled text-accent">
              Harmony Health Home
            </h4>
            <h4 className="artisticText text-7xl font-black text-accent">
              THE STORY
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
                  dignity, and independence. We aim to be the trusted partner in
                  health and companionship, delivering personalized services
                  that prioritize the physical, emotional, and mental welfare of
                  our clients."
                </p>
                <p className="pt-3 text-accent font-bold">
                  Committed to delivering high-quality care, we go above and
                  beyond to ensure the wellbeing and comfort of our clients
                </p>
                <p className="pt-3 text-accent font-bold">
                  Our team of trained carers upholds the highest standards of
                  professionalism, maintaining confidentiality and respecting
                  the dignity of every person in our care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="fullWidthContent bg-secondary">
        <div className="flex-1 overflow-hidden bg-slate-200">
          <img
            src={image2}
            alt="commitment"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="md:w-2/4 p-4 md:p-0">
            <h4 className="text-accent text-3xl font-black md:text-6xl mb-4">
              Our Commitment
            </h4>
            <p className="text-blue-50">
              Empowering Lives, Enabling Harmony: A Future Where Every
              Individual Receives Compassionate and Comprehensive Care
            </p>
          </div>
        </div>
      </section>
      {/*  */}
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  .fullWidthContent {
    height: 50vh;
    display: flex;
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
`;
