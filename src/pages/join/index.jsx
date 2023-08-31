import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { JoinContext } from "../../contexts/joinContext";
import { FormContainer } from "../../components/formContainer";
import { OwlIcon } from "../../components/icons/owlIcon";
import { StepOne } from "./stepOne";
import { StepTwo } from "./stepTwo";

export const JoinPage = () => {
  const { registerData, setRegisterData } = useContext(JoinContext);

  useEffect(() => {
    const userData = localStorage.getItem("userRegisterData");
    if (userData) {
      setRegisterData((prev) => ({ ...prev, ...JSON.parse(userData) }));
    } else {
      setRegisterData((prev) => ({ ...prev, step: 1 }));
      localStorage.setItem("userRegisterData", JSON.stringify(registerData));
    }
  }, []);
  return (
    <FormContainer>
      <div className="w-12 mb-3">
        <Link to="/">
          <OwlIcon />
        </Link>
      </div>
      {registerData.step === 1 && <StepOne />}
      {registerData.step === 2 && <StepTwo />}
    </FormContainer>
  );
};
