import { Toaster } from "sonner";

import "../globals.css";
import { EdgeStoreProvider } from "@/libs/edgestore";
import AuthProvider from "@/components/layouts/ProviderLayouts";

export const metadata = {
  title: "pasc hub",
  description: "study material web app for students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#13131a] min-h-screen">
        <AuthProvider>
          <EdgeStoreProvider>
            <Toaster richColors closeButton position="top-center" />
            {children}
          </EdgeStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
