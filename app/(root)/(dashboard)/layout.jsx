import AuthProvider from "@/components/Provider";

export const metadata = {
  title: "Dashboard | pasc hub",
  description: "study material web app for students",
};

export default function DashboardLayout({ children }) {
  return (
    <section>
      <AuthProvider>{children}</AuthProvider>
    </section>
  );
}
