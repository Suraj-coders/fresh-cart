import Footer from "@/components/global/Footer";
import LoginHeader from "@/components/LoginHeader";
import "./globals.css";





export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        <LoginHeader />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
