import { useContext } from "react";
import { JoinContext } from "../../contexts/joinContext";
import { useNavigate } from "react-router-dom";
import { ButtonFull } from "../../components/ButtonFull";
import { useMutation } from "react-query";

const useJoin = (data) => {
  return useMutation((data) => {
    // create a promise for 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  });
};

export const JoinButton = ({ enabled }) => {
  const navigate = useNavigate();
  const { registerData } = useContext(JoinContext);
  const joinMutation = useJoin(registerData);

  const handleContinue = async () => {
    const data = await joinMutation.mutateAsync(registerData);
    localStorage.removeItem("userRegisterData");
    alert(JSON.stringify(data));
    navigate("/");
  };
  return (
    <div className="mt-3">
      <ButtonFull
        text={joinMutation.isLoading ? "...Loading" : "Join"}
        enabled={enabled}
        clickHandler={handleContinue}
        isLoading={joinMutation.isLoading}
      />
    </div>
  );
};
