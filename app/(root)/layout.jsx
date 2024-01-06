import { Toaster } from "sonner";

import "../globals.css";
import { EdgeStoreProvider } from "@/libs/edgestore";
import AuthProvider from "@/components/layouts/ProviderLayouts";

export const metadata = {
  applicationName: "Pasc hub",
  title: "Pasc hub",
  description:
    "study material web app for students.that makes studying easier for students and document management hassle-free for teachers",
  generator: "Next.js",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Pasc hub",
    // startUpImage: [],
  },
  keywords: [
    "priyadarshini arts and science college malappuram",
    "calicut university study materials",
    "calicut university student portal",
    "calicut university exam result",
    "calicut university syllabus",
    "priyadarshini malappuram",
    "calicut university",
    "Pareeksha Bhavan",
    "study material ",
    "studyhub",
    "paschub",
  ],
  authors: [
    { name: "Mohammed shabin k" },
    {
      name: "Mohammed shabin k",
      url: "https://www.linkedin.com/in/-shabink/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "/favicon/icon-128x128.png" },
    { rel: "icon", url: "/favicon/icon-128x128.png" },
  ],
};

export const viewport = {
  themeColor: [{ color: "#13131a" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
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
