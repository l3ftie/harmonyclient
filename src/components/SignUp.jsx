import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import FormInput from "./FormInput";
import UnderLinedBtn from "./UnderLinedBtn";

const initialValues = {
  name: "",
  email: "",
};

const SignUp = () => {
  const [values, setValues] = useState(initialValues);
  const [isChecked, setIsChecked] = useState(false);
  const [valid, setValid] = useState("");

  const handleChange = (e) => {
    setValid("");
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValid("");

    if (!isChecked || (!values.email && !values.name)) {
      setValid("notValid");
      return;
    }
  };

  return (
    <div className="bg-white h-full rounded-2xl p-4">
      <h3 className="font-bold text-accent pb-2">Sign Up For Job Alerts!</h3>
      <form onSubmit={handleSubmit} className=" border-t">
        {valid === "notValid" ? (
          <p>
            Please Complete the form{" "}
            {!isChecked && "and accept the terms and conditions"}
          </p>
        ) : (
          <></>
        )}
        <FormInput
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name}
          label="Name"
        />
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={values.email}
          label="Email"
        />

        <div
          className="flex items-center mb-4  select-none cursor-pointer"
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          <div
            className="p-0.5 border-2 border-gray-300 rounded-full mr-2 "
            style={{ height: 26, width: 30 }}
          >
            {isChecked ? (
              <div className="bg-blue-500 h-full w-full rounded-full"></div>
            ) : (
              <div className="bg-white h-full w-full rounded-full"></div>
            )}
          </div>
          <p>I agree to the terms of service and privacy policy.</p>
        </div>

        <UnderLinedBtn title="Send Me Jobs" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
