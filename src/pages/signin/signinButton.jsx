import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../../contexts/alertContext";
import { AuthContext } from "../../contexts/authContext";
import { ButtonFull } from "../../components/buttonFull";
import { useMutation } from "react-query";
import { users } from "../../data/users";

const useJoin = (data) => {
  return useMutation((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isUserExist = users.find(
          (user) =>
            user.email === data.email && user.password === data.password,
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
  const { setAlert } = useContext(AlertContext);
  const { setUserAuth } = useContext(AuthContext);
  const joinMutation = useJoin(state);

  const handleContinue = async () => {
    const isUserExist = await joinMutation.mutateAsync(state);
    if (isUserExist.status === "faild") {
      setAlert((prev) => ({
        ...prev,
        show: true,
        message: isUserExist.message,
      }));
      const timer = setTimeout(() => {
        setAlert((prev) => ({
          ...prev,
          show: false,
          message: "",
        }));
      }, 3000);
    } else {
      const { user } = isUserExist;
      const { password, ...rest } = user;
      rest.isAuth = true;
      setUserAuth(rest);
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
