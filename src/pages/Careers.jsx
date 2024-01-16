import styled from "styled-components";
import healthCareImg from "../assets/images/healthcare.jpg";
import ImageHeader from "../components/ImageHeader";
import SignUp from "../components/SignUp";
import UnderLinedBtn from "../components/UnderLinedBtn";

const JobListing = [
  {
    id: 1,
    title: "Home Care Nurse",
    desc: "We are seeking a compassionate and skilled Home Care Nurse to provide high-quality medical care and support to patients in their homes. As a Home Care Nurse, you will be responsible for assessing patients' health conditions, developing care plans, administering medications, and providing ongoing monitoring and evaluation. Your primary goal will be to ensure the well-being and comfort of patients while promoting their independence and maintaining their dignity.",
    date: new Date(),
    location: "Harare ,Zimbabwe",
    qualifications: [
      "Valid nursing license and certification.",
      "Proven experience as a Registered Nurse in a clinical setting.",
      "Knowledge of home healthcare practices and procedures.",
      "Strong assessment and critical thinking skills.",
      "Excellent communication and interpersonal skills.",
      "Ability to work independently and make sound decisions.",
      "Compassionate and patient-centered approach.",
    ],
    responsibilities: [
      {
        id: 1,
        desc: "Conduct comprehensive assessments of patients' health status, including physical, emotional, and social needs.",
      },
      {
        id: 2,
        desc: "Develop individualized care plans based on the assessment findings and in collaboration with the patient, their family, and other healthcare professionals.        ",
      },
      {
        id: 3,
        desc: "Administer medications, treatments, and therapies as prescribed by physicians.",
      },
      {
        id: 4,
        desc: "Monitor patients' vital signs, observe any changes in their condition, and report findings to the healthcare team.",
      },
    ],
  },
];

const Careers = () => {
  return (
    <Wrapper>
      <section className="">
        <ImageHeader bgImage={healthCareImg} height="200px" />
      </section>
      <section className=" p-3 md:p-0 md:container mx-auto md:flex md:gap-5 my-10 ">
        <div className="flex-1">
          <h4 className="text-5xl textStyled font-bold text-accent">
            Current Job Listings
          </h4>
          <p className="text-lg mt-3 textStyled text-accent">
            {JobListing && JobListing.length > 0
              ? "Below is a list of the current openings with our company. Click on the job title to learn more about the opening."
              : "No Available Opportunities at the moment"}
          </p>
          {/*  */}
          {JobListing && JobListing.length > 0 && (
            <div className="border-b-2  border-accent py-2">
              Number Of Jobs: {JobListing.length}
            </div>
          )}
          {/* job listing */}
          {JobListing.length > 0 ? (
            JobListing.map((job) => {
              const { id, title, desc, location } = job;
              return (
                <div
                  key={id}
                  className=" border-b border-gray-200 py-6 md:py-4 "
                >
                  <h4 className="text-secondary cursor-pointer text-xl font-bold hover:text-orange-400 transition-all inline-block">
                    {title}
                  </h4>
                  <p>{desc && desc.slice(0, 130)}...</p>
                  <p className="font-bold text-gray-700 my-2">
                    Location: {location}
                  </p>
                  <UnderLinedBtn title="Apply Now" shadowed />
                </div>
              );
            })
          ) : (
            <section className=" pt-12 pb-24 h-96 grid justify-center items-center ">
              <div className="grid text-center justify-center">
                <h4 className="textStyled text-2xl md:text-4xl font-bold pb-3">
                  There are no current job's
                </h4>
                <p className="text-xl">
                  To stay informed please join our newsletter and will we keep
                  you posted the moment we post an opportunity
                </p>
              </div>
            </section>
          )}
        </div>
        <div className="mt-8 md:mt-0 md:w-96 bg-accent rounded-3xl p-3">
          <SignUp />
        </div>
      </section>
    </Wrapper>
  );
};

export default Careers;

const Wrapper = styled.div``;
