// import { JWT } from "next-auth/jwt";
// import { Session } from "next-auth";

// export interface ExtendedSession extends Session {
//   user: {
//     id: string;
//     email: string;
//     name: string;
//     image: string;
//   };
//   accessToken: string;
//   refreshToken: string;
//   accessTokenExpires: number;
// }

// export interface ExtendedToken extends JWT {
//   id: string;
//   email: string;
//   name: string;
//   picture: string;
//   accessToken: string;
//   refreshToken: string;
//   accessTokenExpires: number;
// }

import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      email?: string;
      name?: string;
      image?: string;
    };
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    email?: string;
    name?: string;
    picture?: string;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
  }
}
