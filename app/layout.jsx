import "@/styles/globals.css";
import { Navbar, Sidebar } from "@/components/navigation";

export const metadata = {
  title: "pasc hub",
  description: "study material web app for students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
          <div className="sm:flex hidden mr-10 relative">
            <Sidebar />
          </div>
          <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
