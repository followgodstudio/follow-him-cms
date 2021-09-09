import React from "react";

import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const sampleData = [79, 72, 29, 6, 52, 32, 73, 40, 14, 75, 77, 39, 9, 15, 10];

function GlucoseRate() {
  return (
    <Sparklines data={sampleData} height={50}>
      <SparklinesLine color="#43DC80" fill="rgba(67, 220, 128, 1)" />
      <SparklinesSpots />
    </Sparklines>
  );
}

export default GlucoseRate;
