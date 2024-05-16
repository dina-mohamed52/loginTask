"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn !== "true") {
        // Add a delay before redirecting

        router.push("/");
      }
      setTimeout(() => {
        setIsLoading(false); // Set loading state to false once the check is complete
      }, 2000); // Delay of 2 seconds
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return <p className="text-center mt-[4rem] text-[2rem]">loading...</p>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
