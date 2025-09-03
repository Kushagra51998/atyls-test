export type TuserCreds = {
  userName: string;
  password: string;
};

export const validUsers: Array<TuserCreds> = [
  {
    userName: "demo@example.com",
    password: "password123",
  },
  {
    userName: "test@user.com",
    password: "testpass",
  },
  {
    userName: "Kush@user.com",
    password: "testpass12",
  },
];
