import styled from "styled-components";
import bgImage from "../assets/images/image3.jpg";
import ImageHeader from "../components/ImageHeader";

const Appointments = () => {
  return (
    <Wrapper>
      <section className="">
        <ImageHeader
          title="Appointments"
          subTitle="Make an appointment"
          bgImage={bgImage}
        />
        {/*  */}
      </section>
      <section className="my-24">
        <h4 className="text-xl md:text-7xl font-black artisticText textStyled text-accent text-center ">
          Make An Appointment <span className="no-artisticText">Today... </span>
        </h4>
      </section>
    </Wrapper>
  );
};

export default Appointments;

const Wrapper = styled.div``;
