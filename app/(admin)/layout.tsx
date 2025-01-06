import Cmsnav from "../Components/Cmsnav"
import ThProvider from "../Utils/ThProvider"
import "./globals.css";


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThProvider>
        <Cmsnav/>
        {children}
        </ThProvider>
        </body>
    </html>
  )
}
