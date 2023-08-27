
export const metadata = {
  title: "Admin login | pasc hub",
  description: "study material web app for students",
};


export default function AuthLayout({ children }) {
  return (
    <section className="flex items-center justify-center">
      {children}
    </section>
  );
}
