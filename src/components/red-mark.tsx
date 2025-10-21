// Red's brand mark - "RED" logo
export function RedMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="253"
      height="128"
      viewBox="0 0 253 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M0 96H28V128H0V96Z" />
        <path d="M28 32V96H0V32H28Z" />
        <path d="M0 0H66V32H0V0Z" />
        <path d="M95 0H121.306H165V32H95V0Z" />
        <path d="M95 32H126V64H95V32Z" />
        <path d="M95 96H126V128H95V96Z" />
        <path d="M134 0H165V32H134V0Z" />
        <path d="M28 53H74V80H28V53Z" />
        <path d="M126 96H165.25V128H126V96Z" />
        <path d="M252.25 128H186.25V96H252.25V128Z" />
        <path d="M74 128L28 97.5V69L53.4211 87.5L74 101.5V128Z" />
        <path d="M252.25 96H225.25V32H252.25V96Z" />
        <path d="M95 64H126V96H95V64Z" />
        <path d="M126 48H165.25V80H126V48Z" />
        <path d="M225.5 32H186.25V0H225.5V32Z" />
        <path d="M252.25 32H186.25V0H252.25V32Z" />
        <path d="M206.25 96H186.25V64H206.25V96Z" />
        <path d="M206.25 64H186.25V32H206.25V64Z" />
        <path d="M47 68H74V39.5V-1H47V68Z" />
      </g>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  // "RED" brand mark - your custom design
  return `<svg width="253" height="128" viewBox="0 0 253 128" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="${color}"><path d="M0 96H28V128H0V96Z"/><path d="M28 32V96H0V32H28Z"/><path d="M0 0H66V32H0V0Z"/><path d="M95 0H121.306H165V32H95V0Z"/><path d="M95 32H126V64H95V32Z"/><path d="M95 96H126V128H95V96Z"/><path d="M134 0H165V32H134V0Z"/><path d="M28 53H74V80H28V53Z"/><path d="M126 96H165.25V128H126V96Z"/><path d="M252.25 128H186.25V96H252.25V128Z"/><path d="M74 128L28 97.5V69L53.4211 87.5L74 101.5V128Z"/><path d="M252.25 96H225.25V32H252.25V96Z"/><path d="M95 64H126V96H95V64Z"/><path d="M126 48H165.25V80H126V48Z"/><path d="M225.5 32H186.25V0H225.5V32Z"/><path d="M252.25 32H186.25V0H252.25V32Z"/><path d="M206.25 96H186.25V64H206.25V96Z"/><path d="M206.25 64H186.25V32H206.25V64Z"/><path d="M47 68H74V39.5V-1H47V68Z"/></g></svg>`;
}
