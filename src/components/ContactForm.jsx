import { useState } from "react";
import FormInput from "./FormInput";
import UnderLinedBtn from "./UnderLinedBtn";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import FormSelectable from "./FormSelectable";
import FormTextArea from "./FormTextArea";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  address: "",
  message: "",
};

export default function ContactForm({ bgImage }) {
  const [values, setValues] = useState(initialValues);
  const [selectedOption, setSelectedOption] = useState("Question");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setValues({ ...values, message: "" });
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.50)), url(${
          bgImage ? bgImage : ""
        })`,
      }}
      className=" p-4 border-4 border-white flex gap-7 bg-contain rounded-3xl"
    >
      <div className="flex-1 py-7">
        <h5></h5>
        <div className="my-6 lg:w-5/6 hidden">
          <p className="text-blue-50 text-xl">
            We appreciate your interest in Harmony Health Home. Our team is
            happy to answer questions or assist you in any way we can. Reach out
            and we’ll be in touch as soon as possible. You can also call us at
            +2630000000
          </p>
        </div>
        <p className="text-blue-50 hidden mb-6">Follow us on:</p>
        <div className="socialMedia  hidden gap-6">
          <button>
            <FaFacebookF size={34} color="#dbeafe" />
          </button>
          <button>
            <FaLinkedinIn size={34} color="#dbeafe" />
          </button>
          <button>
            <RiTwitterXFill size={34} color="#dbeafe" />
          </button>
        </div>
      </div>
      <form
        className="flex-1 bg-blue-50  rounded-xl p-6"
        onSubmit={handleSubmit}
      >
        <div>
          <h5 className="artisticText text-7xl font-black text-accent">
            Contact Us
          </h5>
          <h4 className="textStyled  text-xl font-bold text-accent">
            Got more questions to ask us feel free to complete the form and we
            will get back to you shortly...
          </h4>
        </div>
        <FormInput
          name="firstName"
          type="text"
          handleChange={handleChange}
          value={values.firstName}
          label="Name"
        />
        <FormInput
          name="lastName"
          type="text"
          handleChange={handleChange}
          value={values.lastName}
          label="Surname"
        />
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={values.email}
          label="Email"
        />
        <FormInput
          name="mobile"
          type="tel"
          handleChange={handleChange}
          value={values.mobile}
          label="Mobile"
        />
        <FormInput
          name="address"
          type="text"
          handleChange={handleChange}
          value={values.address}
          label="Address"
        />
        <FormSelectable
          selectedOption={selectedOption}
          name="Do you have a Question or Message"
          handleChange={handleOptionChange}
          options={[{ title: "Question" }, { title: "Message" }]}
          label="Do you have a Question or Message"
        />

        {selectedOption === "Question" ? (
          <FormInput
            name="message"
            type="text"
            handleChange={handleChange}
            value={values.message}
            label="Question"
          />
        ) : (
          <FormTextArea
            name="message"
            handleChange={handleChange}
            value={values.message}
            label="Message"
          />
        )}

        <UnderLinedBtn
          type="submit"
          title="Submit"
          accentColor="#dbeafe"
          hasBg="#dbeafe"
          className="md:w-1/4  py-3 bg-blue-50  uppercase "
        />
      </form>
    </div>
  );
}
