"use server";

import { checkRole } from "../../../utils/roles";
import { clerkClient } from "@clerk/nextjs/server";

export async function setRole(role: string) {
    console.log(role)
    if (!checkRole("admin")) {
        return { message: "Not Authorized" };
    }

    const data: string = role.toString();

    try {
        const res = await clerkClient.users.updateUser(
            data as string,
            {
                publicMetadata: { role: data },
            }
        );
        console.log("metadata " + res.publicMetadata)
        return { message: res.publicMetadata };
    } catch (err) {
        return { message: err };
    }
}