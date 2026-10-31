// ############################################################
//  app/profil/page.tsx — QORUNAN SƏHİFƏ (dərsdə yaz)
// ############################################################
//  BURADA:
//   - useAuth ilə { user, loading } al
//   - useEffect: if (!loading && !user) router.push("/login")
//   - if (loading || !user) return "Yoxlanılır..."
//   - user varsa: profil məlumatı (user.email)
// ------------------------------------------------------------
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilPage() {

  const {user, loading} = useAuth
  const router = useRouter()


  useEffect(() =>{
    if(!loading && !user) router.push("/login");
  }, [user, loading,router])
  // TODO: useAuth + qorunma məntiqi

  if(loading || !user) return <div><p>Yoxlanildi...</p></div>
  return (
    <div className="qutu">
      <h2>Profil</h2>
      <p>Email: <b>{user.email}</b></p>
      <p>yalniz daxil olanlar gorur</p>
      {/* TODO: yalnız daxil olanlar görsün */}
    </div>
  );
}
