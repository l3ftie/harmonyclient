import styled from "styled-components";
import bgImage from "../assets/images/image3.jpg";
import ImageHeader from "../components/ImageHeader";

const Contact = () => {
  return (
    <Wrapper>
      <section className="h-screen">
        <ImageHeader
          title="Contact Us"
          subTitle="Get in touch with us."
          bgImage={bgImage}
        />
        {/*  */}
      </section>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div``;
