import { Link } from 'gatsby'
import React from 'react'

import Maps from '../components/avs/Maps'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Link to="/">Home</Link>
    <div style={{ width: '85vw', height: '80vh' }}>
      <Maps />
    </div>
  </Layout>
)
