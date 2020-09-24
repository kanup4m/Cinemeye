import React from 'react'

function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto" style={{ backgroundColor: "#1a1c23" }} >
      <div className="container grid px-6 mx-auto">{children}</div>
    </main>
  )
}

export default Main
