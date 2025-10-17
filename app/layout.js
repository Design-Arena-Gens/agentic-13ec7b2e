export const metadata = {
  title: 'Ramblings - Where Thoughts Flow',
  description: 'A collection of musings, thoughts, and creative explorations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            overflow-x: hidden;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
