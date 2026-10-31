// ############################################################
//  app/page.tsx — ANA SƏHİFƏ (dərsdə yaz)
// ############################################################
//  BURADA:
//   - useAuth ilə { user, loading } al
//   - loading olanda "Yüklənir..."
//   - user varsa "Xoş gəldin, {user.email}", yoxsa "Daxil olmamısan"
// ------------------------------------------------------------
"use client";

export default function Home() {
  // TODO: useAuth ilə giriş vəziyyətini göstər
  return (
    <div className="qutu">
      <h1>🍽️ CookBook</h1>
      {/* TODO: giriş vəziyyəti */}
    </div>
  );
}
