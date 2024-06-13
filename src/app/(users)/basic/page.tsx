import { auth } from "@clerk/nextjs/server";
import React from "react";

function BasicuserPage() {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role !== "basic")
    return (
      <div className="flex justify-center items-center">
        You are not Basic User
      </div>
    );

  return (
    <div className="flex justify-center items-center">
      Welcome Basic user Page
    </div>
  );
}

export default BasicuserPage;
