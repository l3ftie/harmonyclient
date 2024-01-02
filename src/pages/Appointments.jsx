import { useState } from "react";
import styled from "styled-components";
import bgImage1 from "../assets/images/aboutimage2.jpg";
import bgImage from "../assets/images/image3.jpg";
import ContactForm from "../components/ContactForm";
import FormInput from "../components/FormInput";
import FormSelectable from "../components/FormSelectable";
import FormTextArea from "../components/FormTextArea";
import ImageHeader from "../components/ImageHeader";
import UnderLinedBtn from "../components/UnderLinedBtn";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  address: "",
  services: "",
  message: "",
};

const Appointments = () => {
  const [values, setValues] = useState(initialValues);
  const [selectedOption, setSelectedOption] = useState("Living Assistance");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Wrapper>
      <section className="">
        <ImageHeader
          title="Appointments"
          subTitle="Make an appointment"
          bgImage={bgImage}
          height="200px"
        />
        {/*  */}
      </section>
      <section className="my-24 h-screen">
        <h4 className="text-xl md:text-7xl font-black artisticText textStyled text-accent text-center  ">
          Make An Appointment <span className="no-artisticText">Today... </span>
        </h4>
        {/* form below */}
        <form className="flex custom-container mx-auto my-24 md:gap-7">
          <div className="formInput flex-1 ">
            <div className="flex gap-5">
              <FormInput label="Name" short />
              <FormInput label="Surname" short />
            </div>
            <div className="flex gap-5">
              <FormInput label="Email" short />
              <FormInput label="Phone" short />
            </div>
            <div>
              <FormSelectable
                selectedOption={selectedOption}
                name="Services"
                unstyled
                handleChange={handleOptionChange}
                options={[
                  { title: "Living Assistance" },
                  { title: "Individual" },
                  { title: "Frail Care" },
                  { title: "Other" },
                ]}
                label="What services would you like?"
              />
            </div>
            <div>
              <FormTextArea
                name="message"
                handleChange={handleChange}
                value={values.message}
                label="Message"
              />
            </div>
            <UnderLinedBtn
              type="submit"
              title="Submit"
              accentColor="#dbeafe"
              hasBg="#dbeafe"
              className="md:w-1/4  py-3 bg-blue-50  uppercase "
            />
          </div>
          {/* form data */}
          <div className="formContact">
            <h4 className="textStyled font-black text-xl md:mb-4">
              GET IN TOUCH
            </h4>
            <p className="text-secondary font-semibold text-lg">+26377777777</p>
            <p className="text-secondary font-semibold text-lg">
              info@harmonyhealthhome.com
            </p>
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

export default Appointments;

const Wrapper = styled.div``;
