import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "@/serveractions/_actions";
import { checkRole } from "../../../utils/roles";
export default async function AdminDashboard() {

  if (!checkRole("admin")) return <div>You are not Admin </div>;
  
  const { data, totalCount } = await clerkClient.users.getUserList({
    orderBy: "-created_at",
    limit: 90,
  });

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <h1>This is the admin dashboard</h1>

          {data.map((user) => (
            <div className="flex space-x-8 space-y-3 justify-center items-center text-center">
              <div>Name:{user.fullName}</div>
              <div>Role:{user.publicMetadata.role as string}</div>
              <form action={setRole}>
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="role" value="basic" />
                <button className="border-2 px-2 py-1 rounded-lg">
                  Make Basic
                </button>
              </form>

              <form action={setRole}>
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="role" value="standard" />
                <button className="border-2 px-2 py-1 rounded-lg">
                  Make Standard
                </button>
              </form>

              <form action={setRole}>
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="role" value="premium" />
                <button className="border-2 px-2 py-1 rounded-lg">
                  Make Premium
                </button>
              </form>

              <form action={setRole}>
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="role" value="enterprise" />
                <button className="border-2 px-2 py-1 rounded-lg">
                  Make Enterprise
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
