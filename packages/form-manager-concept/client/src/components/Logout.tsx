import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setLoggedIn } from "../context";

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const loggedIn = useSelector(
    (state: RootState) => state.auth?.user?.loggedIn
  );

  React.useEffect(() => {
    dispatch(setLoggedIn(false));
  }, []);
  return <></>;
};

export default Logout;
