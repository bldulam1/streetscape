import React from 'react'

import AVSAuto from '../components/avs-auto/AVSAuto'
import PageLoader from '../components/loading/PageLoader'

export default () => {
  const isSSR = typeof window === 'undefined'
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<PageLoader />}>
          <AVSAuto />
        </React.Suspense>
      )}
    </>
  )
}
