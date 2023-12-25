import React from 'react'

function DisplayCount({title, count}) {
  return (
    <div className="flex-col justify-center">
    <div>
      {title}
    </div>
    <div className="ml-4">
      {count}
    </div>
    </div>
  )
}

export default DisplayCount