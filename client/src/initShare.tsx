import { createRoot } from "react-dom/client";
import Share from './components/Share'
export function initShare() {
  const root = createRoot(document.getElementById('root')!);
  root.render(<Share />);
}
