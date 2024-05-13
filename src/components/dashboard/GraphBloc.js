import React from 'react';

import EnterVsOutQuantity from './EnterVsOutQuantity';
import EnterVsOutValue from './EnterVsOutValue';

const GraphBlock = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      <EnterVsOutQuantity />

      <EnterVsOutValue />
    </div>
  );
};
export default GraphBlock;
