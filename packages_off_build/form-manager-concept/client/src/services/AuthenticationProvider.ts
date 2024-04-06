import { AppConfig } from "../context";
import { AuthenticatedUser, UserLogin, UserRegister } from "../types";

type RegisterResult = "Resolved" | "Rejected" | "Error";

export const RegisterUser: (
  user: UserRegister
) => Promise<RegisterResult> = async (user: UserRegister) => {
  try {
    const fetchResult = await fetch(
      `${AppConfig.apiRootUrl}${AppConfig.apiRegisterPath}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          fullname: user.fullname,
        }),
      }
    );

    const result = await fetchResult.json();
    if (result.id > 0) {
      return "Resolved";
    }

    return "Rejected";
  } catch (error) {
    console.error("Error", error);
    return "Error";
  }
};

type LoginResult = AuthenticatedUser | undefined;

export const LoginUser: (user: UserLogin) => Promise<LoginResult> = async (
  user: UserLogin
) => {
  try {
    const fetchResult = await fetch(
      `${AppConfig.apiRootUrl}${AppConfig.apiLoginPath}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          strategy: "local",
        }),
      }
    );

    const result = await fetchResult.json();

    if (result.accessToken) {
      return {
        ...result.user,
        accessToken: result.accessToken,
      };
    }

    return undefined;
  } catch (error) {
    console.error("Error", error);
    return undefined;
  }
};
