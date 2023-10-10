import AuthProvider from "@/components/layouts/ProviderLayouts";
import "../globals.css";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "pasc hub",
  description: "study material web app for students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#13131a] min-h-screen">
        <AuthProvider>
          <Toaster />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
