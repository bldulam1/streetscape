import { Link } from 'gatsby'
import React from 'react'

export default params => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to="/">Home</Link>
      <div style={{ flexGrow: 1 }}>
        <iframe
          width="100%"
          height="100%"
          src="https://app.powerbi.com/reportEmbed?reportId=9ced8d26-2f22-4e78-b4fd-858cadeba3e5&autoAuth=true&ctid=81122329-96bb-41cc-9053-65e30c689cd5&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
          frameborder="0"
          allowFullScreen="true"
          title="PowerBI"
        />
      </div>
    </div>
  )
}
