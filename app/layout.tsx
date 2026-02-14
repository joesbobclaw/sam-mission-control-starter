import './globals.css'

export const metadata = {
  title: 'Sam Mission Control',
  description: 'Activity Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">{children}</body>
    </html>
  )
}
