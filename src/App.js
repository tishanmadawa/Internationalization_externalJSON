import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import './i18n';

//npm install react-i18next i18next --save
const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("title")}
        </p>
        <button onClick={() => {
          i18n.changeLanguage('si-LK');
        }}>
          Sinhala
        </button>
        <button onClick={() => {
          i18n.changeLanguage('en-US');
        }}>
          English
        </button>
      </header>
    </div>
  );
}

export default App;
