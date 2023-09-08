import { ProtectedLayouts } from "@/components/layouts/protectedLayouts";

export const metadata = {
  title: "Dashboard | pasc hub",
  description: "study material web app for students",
};

export default function DashboardLayout({ children }) {
  return (
    <section>
      <ProtectedLayouts>{children}</ProtectedLayouts>
    </section>
  );
}
