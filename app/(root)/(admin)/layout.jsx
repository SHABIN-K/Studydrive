import { ProtectedLayout } from "@/components/layouts/protectLayouts";

export const metadata = {
  title: "Admin panel | pasc hub",
  description: "study material web app for students",
};

export default function AdminLayout({ children }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
