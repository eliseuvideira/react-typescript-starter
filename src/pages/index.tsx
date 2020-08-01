import React, { useState } from 'react';
import Layout from '../components/layout';

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout title="Home">
      <div>Home</div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </Layout>
  );
};

export default Index;
