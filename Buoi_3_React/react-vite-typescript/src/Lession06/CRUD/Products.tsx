import React from 'react';
import List from './List';
import Create from './Create';

export default function Products() {
  const [reload, setReload] = React.useState(0);

  const handleOnCreated = (product: any) => {
    console.log('Product created:', product);
    setReload((prev) => prev + 1);
  };

  return (
    <div>
      <Create onCreated={handleOnCreated} />
      <List reload={reload} />
    </div>
  );
}