// ############################################################
//  app/layout.tsx — KÖK LAYOUT (hazır struktur)
// ############################################################
//  AuthProvider ilə əhat olunub ki, bütün komponentlər auth state-i bilsin.
//  (AuthProvider və Navbar içini dərsdə dolduracağıq.)
// ------------------------------------------------------------
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

export const metadata = { title: "CookBook — Firebase Nümunə" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body>
        <AuthProvider>
          <Navbar />
          <main className="main">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
