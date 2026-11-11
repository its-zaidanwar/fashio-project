import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginActionApi, registerActionapi } from "../state/authActions";
import { useForm } from "react-hook-form";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const registerForm = async ({ name, email, password }) => {
    console.log({ name, email, password });

    try {
      await dispatch(
        registerActionapi({
          name,
          email,
          passwordHash: password,
        }),
      ).unwrap();

      reset();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const loginForm = async ({ email, password }) => {
    try {
      await dispatch(
        loginActionApi({
          email,
          password,
        }),
      ).unwrap();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    registerForm,
    loginForm,
    isLoading,
    error,
    register,
    handleSubmit,
    errors,
    reset,
  };
};

export default useAuth;
