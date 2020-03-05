import { Link } from 'gatsby'
import React from 'react'

import Maps from '../components/avs/Maps'

export default () => (
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
      <Maps />
    </div>
  </div>
)
