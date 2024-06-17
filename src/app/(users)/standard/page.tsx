import { auth } from "@clerk/nextjs/server";
import React from "react";

function StandarduserPage() {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role !== "standard")
    return (
      <div className="flex justify-center items-center">
        You are not standard User
      </div>
    );

  return (
    <div className="flex justify-center items-center">
      Welcome standard PAge
    </div>
  );
}

export default StandarduserPage;
