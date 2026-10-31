// ############################################################
//  context/AuthContext.tsx — KİM DAXİL OLUB?  (dərsdə yaz)
// ############################################################
//  BURADA:
//   1) createContext ilə AuthContext yarat
//   2) AuthProvider: useState (user, loading) + useEffect içində
//      onAuthStateChanged(auth, (u) => { setUser(u); setLoading(false); })
//   3) return () => unsub()  (təmizləmə)
//   4) <AuthContext.Provider value={{ user, loading }}>{children}</...>
//   5) export const useAuth = () => useContext(AuthContext)
// ------------------------------------------------------------
"use client";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // TODO: onAuthStateChanged ilə auth state qur
  return <>{children}</>;
}

// TODO: context-dən { user, loading } qaytar
export function useAuth() {
  return { user: null as any, loading: false };
}
