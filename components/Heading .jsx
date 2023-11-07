import React from 'react'

export default function Heading ({content, title}) {
  return (
    <h1> 
        {content}
        {title}
    </h1>
  )
}

// replaced props.content with content and title using {} this breaks down
// the code.

// The react component must start with a Capitol letter eg Heading, Paragraph etc
// and match the default function.

// To add extra parent you must wrap it eg <h1><h2></h2></h1>