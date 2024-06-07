"use client";
import { useAuth, UserProfile } from "@clerk/nextjs";
import React, { Suspense } from "react";

function ProfilePage() {
  const { userId, isLoaded } = useAuth();

  return (
    <Suspense fallback={"Loading"}>
      <div className="flex justify-center items-center my-6">
        {isLoaded && userId ? (
          <UserProfile />
        ) : (
          <p>Please login to see Profile Details</p>
        )}
      </div>
    </Suspense>
  );
}

export default ProfilePage;
