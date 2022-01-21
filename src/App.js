import React from 'react'
import DataGetter from './DataGetter'
import ErrorGetter from './ErrorGetter'
import LoadingGetter from './LoadingGetter'

function App() {
  return (
    <div>
      <DataGetter/>
      <ErrorGetter/>
      <LoadingGetter/>
    </div>
  );
}

export default App;
