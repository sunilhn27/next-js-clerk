import React from "react";
import { SearchUsers } from "../pricing/_search-user";
import { clerkClient } from "@clerk/nextjs/server";
import { checkRole } from "../../../utils/roles";
import { redirect } from "next/navigation";
import { setRole } from "../pricing/_actions";

export default async function AdminDashboard(params: {
  searchParams: { search?: string };
}) {
  if (!checkRole("admin")) {
    redirect("/");
  }

  const query = params.searchParams.search;

  const users = query
    ? (await clerkClient.users.getUserList({ query })).data
    : [];

  return (
    <>
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the 'admin' role.</p>

      <SearchUsers />

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">
                {user.firstName} {user.lastName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {
                  user.emailAddresses.find(
                    (email) => email.id === user.primaryEmailAddressId
                  )?.emailAddress
                }
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.publicMetadata.role as string}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center items-center space-x-4">
                <div>
                  <form action={setRole}>
                    <input type="hidden" value={user.id} name="id" />
                    <input type="hidden" value="admin" name="role" />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Make Admin
                    </button>
                  </form>
                </div>
                <div className="mt-2">
                  <form action={setRole}>
                    <input type="hidden" value={user.id} name="id" />
                    <input type="hidden" value="moderator" name="role" />
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Make Moderator
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
