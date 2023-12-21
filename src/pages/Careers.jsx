import styled from "styled-components";
import bgImage from "../assets/images/image3.jpg";
import ImageHeader from "../components/ImageHeader";

const Careers = () => {
  return (
    <Wrapper>
      <section className="h-screen">
        <ImageHeader
          title="Careers at Harmony"
          subTitle="current opportunities"
          bgImage={bgImage}
        />
        {/*  */}
      </section>
    </Wrapper>
  );
};

export default Careers;

const Wrapper = styled.div``;
