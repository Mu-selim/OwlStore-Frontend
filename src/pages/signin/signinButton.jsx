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

export const SigninButton = ({ enabled, state }) => {
  const navigate = useNavigate();
  const joinMutation = useJoin(state);

  const handleContinue = async () => {
    const data = await joinMutation.mutateAsync(state);
    alert(JSON.stringify(data));
    navigate("/");
  };
  return (
    <div className="mt-3">
      <ButtonFull
        text={joinMutation.isLoading ? "...Loading" : "Sign in"}
        enabled={enabled}
        clickHandler={handleContinue}
        isLoading={joinMutation.isLoading}
      />
    </div>
  );
};
