import logo from "./logo.svg";
import "./App.css";
import styled, { withTheme } from "styled-components";
import { useTheme } from "./ThemeContext";
import { buttonBackgroundColor, buttonTextColor } from "./Theme";

const Button = styled.button`
  background: ${buttonBackgroundColor};
  border: none;
  border-radius: 0.3em;
  box-shadow: none;
  color: ${buttonTextColor};
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
`;

function App(props) {
  const themeToggle = useTheme();

  const modeToggle = () => {
    const localmode = localStorage.getItem("mode");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button onClick={() => themeToggle.toggle()}>
            {props.theme.mode === "dark"
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"}
          </Button>
        </p>
      </header>
    </div>
  );
}

export default withTheme(App);
