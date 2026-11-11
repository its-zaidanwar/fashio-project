import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeActionApi } from "../state/authActions";

const useAuthCheck = () => {
  const dispatch = useDispatch();

  const isAuthCheck = useSelector((state) => state.auth.isAuthCheck);

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;

    hasRun.current = true;

    dispatch(getMeActionApi());
  }, [dispatch]);

  return isAuthCheck;
};

export default useAuthCheck;
