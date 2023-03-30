import React from 'react';

// <DaysLedt> is:
//  - Lazy-loaded
//  - Loaded and rendered only in the browser
export default function(props) {
    const [Component, setComponent] = React.useState(() => Loading)
  
    // useEffect() callbacks are only run in the browser, consequently the map component
    // is loaded and rendererd only in the browser.
    React.useEffect(() => {
      setComponent(() => React.lazy(() => import('./QOD.jsx')))
    }, [])
  
    return (
      <React.Suspense fallback={<Loading />}>
          <p className="w3-large w3-center"><Component /> A safety question every day!</p>
      </React.Suspense>
    )
  }
  
  function Loading() {
    return <span></span>
  }