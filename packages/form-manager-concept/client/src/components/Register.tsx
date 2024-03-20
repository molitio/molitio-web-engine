import React from "react";
import {
  StyledForm,
  StyledFormButton,
  StyledFormInput,
  StyledFormLabel,
  StyledRegister,
} from "../styled";
import { RegisterUser } from "../services";
import { UserRegister } from "../types";
import { AppConfig } from "../context";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<UserRegister>({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const registrationResult = await RegisterUser(user);
      if (registrationResult === "Resolved") {
        setUser({
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }

      if (registrationResult === "Resolved") {
        navigate(`${AppConfig.home}`);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <StyledRegister>
      <StyledForm onSubmit={handleRegister}>
        <StyledFormLabel htmlFor="name">Name:</StyledFormLabel>
        <StyledFormInput
          type="text"
          id="name"
          name="name"
          value={user.fullname}
          onChange={(e) =>
            setUser({
              ...user,
              fullname: e.target.value,
            })
          }
          required
        />
        <StyledFormLabel htmlFor="email">Email:</StyledFormLabel>
        <StyledFormInput
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
          required
        />
        <StyledFormLabel htmlFor="password">Password:</StyledFormLabel>
        <StyledFormInput
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
          required
        />
        <StyledFormLabel htmlFor="confirm-password">
          Confirm Password:
        </StyledFormLabel>
        <StyledFormInput
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({
              ...user,
              confirmPassword: e.target.value,
            })
          }
          required
        />
        <StyledFormButton type="submit">Register</StyledFormButton>
      </StyledForm>
    </StyledRegister>
  );
};

export default Register;
