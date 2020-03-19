import React from 'react'

import AVSAuto from '../components/avs-auto/AVSAuto'

export default () => {
  const isSSR = typeof window === 'undefined'
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div>Loading</div>}>
          <AVSAuto />
        </React.Suspense>
      )}
    </>
  )
}
