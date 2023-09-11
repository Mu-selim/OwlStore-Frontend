import { useContext, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { JoinContext } from "../../contexts/joinContext";
import { Input } from "../../components/input";
import { ButtonFull } from "../../components/buttonFull";

const INITIAL_STATE = {
  username: "",
  email: "",
  phoneNumber: "",
  continue: false,
  errors: {
    username: "",
    email: "",
    phoneNumber: "",
  },
};

const validateUsername = (username) => {
  if (username.trim() === "") {
    return "Username is required";
  }
  if (username.length < 3 || username.length > 20) {
    return "Username must be between 3 and 20 characters";
  }
  return "";
};

const validateEmail = (email) => {
  if (email.trim() === "") {
    return "Email is required";
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email) ? "" : "Email is not valid";
};

const validatePhone = (phone) => {
  if (phone.trim() === "") {
    return "Phone number is required";
  }
  if (isNaN(phone)) {
    return "Phone number must be a number";
  }

  const len = phone.length;
  const flag1 = len === 11 && phone[0] === "0";
  const flag2 = len === 12 && phone[0] === "2";
  return flag1 || flag2 ? "" : "Phone number is not valid";
};

const enableContinue = (state) => {
  return (
    validateUsername(state.username) === "" &&
    validateEmail(state.email) === "" &&
    validatePhone(state.phoneNumber) === ""
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
        errors: {
          ...state.errors,
          username: validateUsername(action.payload),
        },
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
        errors: {
          ...state.errors,
          email: validateEmail(action.payload),
        },
      };
    case "SET_PHONE":
      return {
        ...state,
        phoneNumber: action.payload,
        errors: {
          ...state.errors,
          phoneNumber: validatePhone(action.payload),
        },
      };
    case "SET_CONTINUE":
      return {
        ...state,
        continue: enableContinue(state),
      };
    default:
      return state;
  }
};

export const StepOne = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { registerData, setRegisterData } = useContext(JoinContext);

  useEffect(() => {
    const userData = localStorage.getItem("userRegisterData");
    if (userData) {
      const data = JSON.parse(userData);
      setRegisterData((prev) => ({ ...prev, ...data }));
      if (data.username !== "") {
        dispatch({ type: "SET_USERNAME", payload: data.username });
      }
      if (data.email !== "") {
        dispatch({ type: "SET_EMAIL", payload: data.email });
      }
      if (data.phoneNumber !== "") {
        dispatch({ type: "SET_PHONE", payload: data.phoneNumber });
      }
      dispatch({ type: "SET_CONTINUE" });
    } else {
      setRegisterData((prev) => ({ ...prev, step: 1 }));
      localStorage.setItem("userRegisterData", JSON.stringify(registerData));
    }
  }, []);

  const updateRegisterAndStorage = (key, value) => {
    setRegisterData((prev) => ({ ...prev, [key]: value }));
    localStorage.setItem(
      "userRegisterData",
      JSON.stringify({ ...registerData, [key]: value }),
    );
    dispatch({ type: "SET_CONTINUE" });
  };

  const handleUsernameChange = (e) => {
    dispatch({ type: "SET_USERNAME", payload: e.target.value });
    updateRegisterAndStorage("username", e.target.value);
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
    updateRegisterAndStorage("email", e.target.value);
  };

  const handlePhoneChange = (e) => {
    dispatch({ type: "SET_PHONE", payload: e.target.value });
    updateRegisterAndStorage("phoneNumber", e.target.value);
  };

  const handleContinue = () => {
    setRegisterData((prev) => ({ ...prev, step: 2 }));
    localStorage.setItem(
      "userRegisterData",
      JSON.stringify({ ...registerData, step: 2 }),
    );
  };

  return (
    <>
      <h2 className="w-full text-center font-bold text-3xl">Join OwlStore</h2>
      <div className="pb-1">
        <Input
          text="Username"
          type="text"
          value={state.username}
          placeholder="Enter your username"
          error={state.errors.username}
          change={handleUsernameChange}
        />
        <Input
          text="Email"
          type="email"
          value={state.email}
          placeholder="Enter your email"
          error={state.errors.email}
          change={handleEmailChange}
        />

        <Input
          text="Phone Number"
          type="text"
          value={state.phoneNumber}
          placeholder="Enter your phone number"
          error={state.errors.phoneNumber}
          change={handlePhoneChange}
        />
      </div>
      <div className="mt-3">
        <ButtonFull
          text="Continue"
          enabled={state.continue}
          clickHandler={handleContinue}
        />
      </div>
      <div className="w-full text-center mt-2">
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link to="/signin" className="text-gray-600 font-bold">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
};
