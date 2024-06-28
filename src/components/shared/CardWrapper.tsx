"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "@/components/auth/Header";
import Social from "../auth/Social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <h3>backButton</h3>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
