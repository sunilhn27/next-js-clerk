"use server";
import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function setRole(formData: FormData) {

    // Check that the user trying to set the role is an admin
    // if (!checkRole("admin")) {
    //     return { message: "Not Authorized" };
    // }

    const userId: string = formData.get("id") as string
    const role: string = formData.get("role") as string

    console.log("selected ID " + userId);
    console.log("selected Role " + role);

    try {
        const res = await clerkClient.users.updateUser(
            userId as string,
            {
                publicMetadata: { role: formData.get("role") as string },
            }
        );
        revalidatePath("/onboarding");
        return { message: res.publicMetadata };

    } catch (err) {
        return { message: err };
    }
}