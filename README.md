# CookBook — Firebase Auth (BOŞ versiya, dərsdə yazmaq üçün) 🔐

Konfiqurasiya, stil, struktur və layout HAZIRDIR. Firebase məntiqini
(auth kodunu) dərsdə birlikdə yazacağıq — fayllarda `// TODO` ilə işarələnib.

## 1) Firebase layihəsi qur
1. console.firebase.google.com -> Add project
2. Build -> Authentication -> Get started -> Email/Password -> Enable
3. Project Settings -> Your apps -> Web (</>) -> config dəyərlərini kopyala

## 2) Config-i qoş
`.env.local.example` -> `.env.local` adı ilə kopyala, öz dəyərlərini yaz.

## 3) İşə sal
```bash
npm install
npm run dev
```

## Doldurma sırası (fayllardakı TODO-lara uyğun)
1. `lib/firebase.ts` — Firebase-i başlat, auth export et
2. `context/AuthContext.tsx` — kim daxil olub (onAuthStateChanged)
3. `app/register/page.tsx` — qeydiyyat (createUser...)
4. `app/login/page.tsx` — giriş (signIn...)
5. `components/Navbar.tsx` — giriş/çıxış göstər
6. `app/profil/page.tsx` — qorunan səhifə
7. `app/page.tsx` — ana səhifədə giriş vəziyyəti

> `app/layout.tsx`, `globals.css` və konfiqurasiya hazırdır — toxunma.
> Çətinlik çəksən tam (işlək) nümunəyə bax.
