import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { JoinContext } from "../../contexts/joinContext";
import { AlertContext } from "../../contexts/alertContext";
import { useNavigate } from "react-router-dom";
import { ButtonFull } from "../../components/ButtonFull";
import { useMutation } from "react-query";
import { createUser, users } from "../../data/users";

const useJoin = (data) => {
  return useMutation((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isUserExist = users.find((user) => user.email === data.email);
        if (isUserExist) {
          resolve({
            status: "faild",
          });
        }
        resolve({
          status: "success",
        });
      }, 1000);
    });
  });
};

export const JoinButton = ({ enabled }) => {
  const navigate = useNavigate();
  const { setUserAuth } = useContext(AuthContext);
  const { registerData, setRegisterData } = useContext(JoinContext);
  const { setAlert } = useContext(AlertContext);
  const joinMutation = useJoin(registerData);

  const handleJoin = async () => {
    const isUserExist = await joinMutation.mutateAsync(registerData);
    if (isUserExist.status === "faild") {
      setAlert((prev) => ({
        ...prev,
        show: true,
        message: "This email is already exist",
      }));
      const timer = setTimeout(() => {
        setAlert((prev) => ({
          ...prev,
          show: false,
          message: "",
        }));
      }, 3000);
      // set step to 1
      setRegisterData({
        ...registerData,
        step: 1,
      });
    } else {
      const newUser = {
        ...createUser(
          registerData.username,
          registerData.email,
          registerData.phoneNumber,
          registerData.password,
          "user"
        ),
      };
      users.push(newUser);
      const { password, ...rest } = newUser;
      rest.isAuth = true;
      setUserAuth((prev) => ({
        ...prev,
        rest,
      }));
      localStorage.setItem("user", JSON.stringify(rest));
      navigate("/");
    }
    localStorage.removeItem("userRegisterData");
  };
  return (
    <div className="mt-3">
      <ButtonFull
        text={joinMutation.isLoading ? "...Loading" : "Join"}
        enabled={enabled}
        clickHandler={handleJoin}
        isLoading={joinMutation.isLoading}
      />
    </div>
  );
};
