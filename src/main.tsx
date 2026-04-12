
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import "./styles/tokens.css";
  import "./styles/components/Hero.css";
  import "./styles/components/Timeline.css";
  import "./styles/components/About.css";
  import "./styles/components/Work.css";
  import "./styles/components/Article.css";
  import "./styles/components/Header.css";
  import "./styles/components/Footer.css";
  import "./styles/components/TableOfContents.css";

  createRoot(document.getElementById("root")!).render(<App />);
  