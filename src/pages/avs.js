import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Maps from '../components/avs/Maps'

const SecondPage = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <div style={{ width: '85vw', height: '80vh' }}>
      <Maps />
    </div>
  </Layout>
)

export default SecondPage
