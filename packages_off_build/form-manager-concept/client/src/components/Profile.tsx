import React from "react";
import {
  StyledProfile,
  StyledProfileInfo,
  StyledProfileItem,
  StyledProfileLogoutButton,
  StyledProfileValue,
} from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setLoggedIn } from "../context";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector(
    (state: RootState) => state?.auth?.user?.authenticatedUser
  );

  const handleLogout = () => {
    dispatch(setLoggedIn(false));
  };

  return (
    <StyledProfile>
      <StyledProfileInfo>
        <StyledProfileItem>ID:</StyledProfileItem>
        <StyledProfileValue>{authenticatedUser?.id}</StyledProfileValue>
        <StyledProfileItem>Full Name</StyledProfileItem>
        <StyledProfileValue>{authenticatedUser?.fullname}</StyledProfileValue>
        <StyledProfileItem>Email address</StyledProfileItem>
        <StyledProfileValue>{authenticatedUser?.email}</StyledProfileValue>
        <StyledProfileLogoutButton onClick={handleLogout}>
          Logout
        </StyledProfileLogoutButton>
      </StyledProfileInfo>
    </StyledProfile>
  );
};

export default Profile;
