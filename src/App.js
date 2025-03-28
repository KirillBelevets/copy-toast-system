import "./App.css";
import CopyButton from "./components/CopyButton";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <CopyButton text="https://github.com/KirillBelevets" />
    </div>
  );
}

export default App;
