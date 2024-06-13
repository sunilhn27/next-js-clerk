import { auth } from "@clerk/nextjs/server";
import React from "react";

function EnterPriseuserPage() {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role !== "enterprise")
    return (
      <div className="flex justify-center items-center">
        You are not Enterprise User
      </div>
    );

  return (
    <div className="flex justify-center items-center">
      Welcome EnterPrise user Page
    </div>
  );
}

export default EnterPriseuserPage;
