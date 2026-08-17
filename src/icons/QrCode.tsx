import { createIcon } from "../create-icon";

export const QrCode = createIcon("QrCode", (
  <>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M14 14h3v3h-3z" />
    <path d="M20 14h1v1h-1z" />
    <path d="M14 20h1v1h-1z" />
    <path d="M20 20h1v1h-1z" />
    <path d="M17.5 17.5h.01" />
  </>
));
