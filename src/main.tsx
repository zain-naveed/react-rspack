import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Test from './shared/component/test/test.tsx'
import "./shared/component/myComponent/myWebComponent.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Test />
	</React.StrictMode>
);
