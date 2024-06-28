import Hero from "@/components/shared/Hero";
import React from "react";
import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  return (
    <div>
      {/* <h1>{session?.user?.name}</h1> */}
      <Hero />
    </div>
  );
};

export default Home;
