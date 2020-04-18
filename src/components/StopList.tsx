import React from 'react'

export const StopList: React.FC<{}> = () => {
  return (
    <section
      style={{
        backgroundColor: 'cadetblue',
        flexGrow: 5,
      }}
    >
      {false ? (
        <>No route selected!</>
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>Stops</h1>
          <ul>
            <li>Stop 1</li>
          </ul>
        </>
      )}
    </section>
  )
}

export default StopList
