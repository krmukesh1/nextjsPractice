import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const ErrorPage = () => {
  const router = useRouter();
  const handleInput = () => {
    router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <div>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are Sorry, Page not found</h2>
          <p>
            The Page you are looking for might have been removed had its name
            chnaged or its temporarily unavailable
          </p>

          <a onClick={handleInput}>Back to Homepage</a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
