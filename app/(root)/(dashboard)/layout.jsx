import { ProtectedLayout } from "@/components/layouts/protectLayouts";

export const metadata = {
  title: "Dashboard | pasc hub",
  description: "study material web app for students",
};

export default function DashboardLayout({ children }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
