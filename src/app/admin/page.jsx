import { Suspense } from "react";
import AdminForm from "../../components/adminForm/adminForm";
import { auth } from "../../lib/auth";
import AdminPostForm from "../../components/adminForm/adminPostForm";
import AdminUserForm from "../../components/adminForm/adminUserForm";

export default async function AdminPage() {
  const session = await auth();
  return (
    <div className="mt-5 flex items-center justify-center bg-bgdark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-4">
        <AdminForm />
        <AdminPostForm userId={session.user.id} />
        <AdminUserForm />
      </div>
    </div>
  );
}
