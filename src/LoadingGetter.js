import React from 'react'
import useJsonFetch from './hooks/useJsonFetch'

function LoadingGetter() {
  const [_data, loading, error] = useJsonFetch(process.env.REACT_APP_LOADING_URL);
  return (
    <div>
      Fetching {process.env.REACT_APP_LOADING_URL}:
      {loading && <p>Loading...</p>}
      {error && <p>Error happened :(</p>}
      {!loading && !error && <p>Data gotten!</p>}
      <br/>
    </div>
  );
}

export default LoadingGetter;