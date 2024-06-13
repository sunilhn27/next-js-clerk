import { auth } from "@clerk/nextjs/server";
import React from "react";

function PremiumuserPage() {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role !== "premium")
    return (
      <div className="flex justify-center items-center">
        You are not Premium User
      </div>
    );

  return (
    <div className="flex justify-center items-center">
      Welcome PremiumuserPage
    </div>
  );
}

export default PremiumuserPage;
