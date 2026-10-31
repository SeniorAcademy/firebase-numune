// ############################################################
//  components/Navbar.tsx — giriş vəziyyətinə görə dəyişir (dərsdə yaz)
// ############################################################
//  BURADA:
//   - useAuth ilə user-i al
//   - signOut(auth) ilə çıxış funksiyası + useRouter ilə yönləndir
//   - user varsa: Profil + email + Çıxış düyməsi
//   - user yoxsa: Giriş + Qeydiyyat linkləri (next/link)
// ------------------------------------------------------------
"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();

  async function logout() {
    await signOut(auth);
    router.push("/login");
  }

  // TODO: useAuth, logout, şərti göstərmə
  return (
    <nav className="navbar">
      <Link href="/">🍽️ CookBook</Link>
      <div className="sag">
        {user ? (
          <>
            <Link href="/profil">Profil</Link>
            <span>{user.eamil}</span>
            <button onClick={logout}>Cixis</button>
          </>
        ) : (
          <>
            <Link href="/login">Giris</Link>
            <Link href="/register">Qeydiyyat</Link>
          </>
        )}
      </div>
    </nav>
  );
}
