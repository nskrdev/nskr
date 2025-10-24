// Reddy's brand mark - "REDDY" logo with opacity effects
export function RedMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="600"
      height="200"
      viewBox="0 0 600 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
          .text-base {
            font-family: 'VT323', monospace;
            font-size: 170px;
            fill: rgba(150, 150, 150, 1);
          }
           .text-highlight {
             font-family: 'VT323', monospace;
             font-size: 170px;
             fill: rgba(190, 190, 190, 0.4);
           }
        `}
      </style>
      <text x="45" y="144">
        <tspan className="text-base">RED</tspan>
        <tspan className="text-highlight">DY</tspan>
      </text>
    </svg>
  );
}

export function getMarkSVG() {
  // "REDDY" brand mark - updated design with opacity effects
  return `<svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
      .text-base { font-family: 'VT323', monospace; font-size: 170px; fill: rgba(150, 150, 150, 1); }
       .text-highlight { font-family: 'VT323', monospace; font-size: 170px; fill: rgba(190, 190, 190, 0.4); }
    </style>
     <text x="45" y="144">
       <tspan class="text-base">RED</tspan>
       <tspan class="text-highlight">DY</tspan>
     </text>
  </svg>`;
}
