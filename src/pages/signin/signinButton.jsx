import { useNavigate } from "react-router-dom";
import { ButtonFull } from "../../components/ButtonFull";
import { useMutation } from "react-query";
import { users } from "../../data/users";

const useJoin = (data) => {
  return useMutation((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isUserExist = users.find(
          (user) => user.email === data.email && user.password === data.password
        );
        if (isUserExist) {
          resolve({
            status: "success",
            user: isUserExist,
          });
        }
        resolve({
          status: "faild",
          message: "This email or password is wrong",
        });
      }, 1000);
    });
  });
};

export const SigninButton = ({ enabled, state }) => {
  const navigate = useNavigate();
  const joinMutation = useJoin(state);

  const handleContinue = async () => {
    const isUserExist = await joinMutation.mutateAsync(state);
    if (isUserExist.status === "faild") {
      alert(isUserExist.message);
    } else {
      const { user } = isUserExist;
      const { password, ...rest } = user;
      localStorage.setItem("user", JSON.stringify(rest));
      navigate("/");
    }
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
