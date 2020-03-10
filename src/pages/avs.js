import { Link } from 'gatsby'
import React from 'react'

import AVSAutoWS from '../components/website-demo/app'

const createStyles = () => {
  return {
    main: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
    },
    streetscape: {
      flexBox: 1,
    },
  }
}

export default () => {
  const styles = createStyles()
  return (
    <div style={styles.main}>
      <Link to="/">Home</Link>
      <div style={styles.streetscape}>
        {/* <StreetScapeGL /> */}
        <AVSAutoWS />
      </div>
    </div>
  )
}
