const Spinner = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform-origin="18 18">
        <path d="M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18Z"
          stroke="url(#paint0_linear_82_889)"
          stroke-width="4"
          stroke-miterlimit="3.8637"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="6 12 18 18">
          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="3s" repeatCount="indefinite" />
        </path>
      </g>
      <defs>
        <linearGradient id="paint0_linear_82_889" x1="18" y1="2" x2="18" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0.267499" stop-color="#64ACFF" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Spinner;