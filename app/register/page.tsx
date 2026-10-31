

import Link from "next/link";

export default function RegisterPage() {
  // TODO: state + handleSubmit (createUserWithEmailAndPassword)
  return (
    <div className="qutu dar">
      <h2>Qeydiyyat</h2>
      {/* TODO: forma */}
      <p className="alt">Hesabın var? <Link href="/login">Giriş et</Link></p>
    </div>
  );
}
