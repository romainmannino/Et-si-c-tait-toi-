import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Et si c’était toi ?",
  description: "La France. Tes choix. Un jeu de décisions simple et concret.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
