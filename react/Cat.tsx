import * as React from 'react';
const Cat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M4.525 24h13.789a2.663 2.663 0 0 0 2.662-2.663V10.139c2.412-.173 3.833-2.874 2.529-4.98l-.746-1.204a3.263 3.263 0 0 0-2.776-1.546h-2.016V1.58A1.577 1.577 0 0 0 16.388 0a3.748 3.748 0 0 0-3.747 3.748V8.78c-1.88.21-3.309 1.118-4.358 2.38-1.18 1.415-1.869 3.255-2.28 5.012a25.435 25.435 0 0 0-.6 4.824c-.017.501-.017.94-.014 1.29h-.862A2.815 2.815 0 0 1 2.47 17.55l1.366-1.466a5.446 5.446 0 0 0-.13-7.564L2.365 7.178A.857.857 0 1 0 1.153 8.39l1.342 1.342a3.73 3.73 0 0 1 .09 5.183L1.215 16.38A4.531 4.531 0 0 0 4.526 24ZM16.253 1.72v1.546a.857.857 0 0 0 .857.857h2.873c.537 0 1.036.278 1.32.735l.746 1.204a1.55 1.55 0 0 1-1.32 2.37h-.608a.857.857 0 0 0-.858.858v12.047a.95.95 0 0 1-.95.95h-.947v-.95a4.47 4.47 0 0 0-4.47-4.471h-1.505a.857.857 0 1 0 0 1.714h1.505a2.756 2.756 0 0 1 2.755 2.757v.95H7.104c-.006-.331-.004-.75.011-1.233.042-1.238.18-2.872.558-4.492.38-1.632.989-3.18 1.927-4.304.91-1.094 2.143-1.809 3.898-1.809a.857.857 0 0 0 .857-.857V3.748c0-1.077.838-1.96 1.898-2.029Z"
    />
  </svg>
);
export default Cat;