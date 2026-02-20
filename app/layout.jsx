import './globals.css'

export const metadata = {
  title: 'Deepanshu Pandey | MERN Developer',
  description: 'Coder Portfolio – React, Node, MongoDB'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-darkbg text-gray-200 font-mono selection:bg-neon selection:text-black">
        {children}
      </body>
    </html>
  )
}