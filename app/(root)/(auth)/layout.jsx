import { ProtectedAuthLayout } from "@/components/layouts/ProtectedAuthLayout";

export const metadata = {
  title: "Login | pasc hub",
  description: "study material web app for students",
};

export default function AuthLayout({ children }) {
  return <section>{children}</section>;
}
