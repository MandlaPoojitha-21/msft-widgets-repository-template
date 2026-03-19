import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

export async function init(sdk: any) {
  await sdk.whenReady();
  const root = createRoot(sdk.shadowRoot);
  root.render(<App />);
  sdk.on("destroy", () => root.unmount());
}
