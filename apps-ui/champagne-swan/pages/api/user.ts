import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  username: string;
  email: string;
  secretHash: string;
};

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, email, secretHash } = req?.body ?? "";
  const result = register({
    username: username,
    email: email,
    secretHash: secretHash,
  });

  res.status(200).json({ result });
};

const register = async (data: User) => {
  //TODO add query to create user
  const user = {};

  console.log("user", user);
  console.log("data", data);
  return { ...user };
};

export default registerUser;
