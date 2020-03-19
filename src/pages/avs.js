import React from 'react'

const ClientSideApp = React.lazy(() =>
  require('../components/avs-auto/AVSAuto')
)

export default () => {
  const isSSR = typeof window === 'undefined'
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div>Loading</div>}>
          <ClientSideApp />
        </React.Suspense>
      )}
    </>
  )
}
