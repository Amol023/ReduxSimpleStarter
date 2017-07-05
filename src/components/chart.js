import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ({chartData, color}) => {
  return (
    <div>
      <Sparklines height={120} width={100} data={chartData}>
        <SparklinesLine color={color} />
      </Sparklines>
    </div>
  )
}