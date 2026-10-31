
"use client";

import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

  const [email,setEmail] = useState("")
  const [parol, setParol] = useState("")
  const [xeta, setXeta] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    setxeta("")
    try{
      await signInWithEmailAndPassword(auth, email, parol)
      router.push("/")
    }catch(err:any){
      setXeta("Email ve ya parol yalnisdir")
    }
  }

  // TODO: state + handleSubmit (signInWithEmailAndPassword)
  return (
    <div className="qutu dar">
      <h2>Giriş</h2>
      {/* TODO: forma */}

      <form action="">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" value={parol} onChange={(e) => setParol(e.target.value)}/>
        {xeta && <p>{xeta}</p>}

        <button>Daxil ol</button>


        
      </form>
      <p className="alt">Hesabın yoxdur? <Link href="/register">Qeydiyyatdan keç</Link></p>
    </div>
  );
}
