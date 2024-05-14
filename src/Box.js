import React from 'react'

function BoxLayout ({children,title}) {
  return (
    <div style={{padding:'10px 0'}}>
        {children}
        {title}
    </div>
  )
}

export default BoxLayout