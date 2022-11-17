import PasswordSettings from "./PasswordSettings";
import PasswordTable from "./PasswordTable";
const App = () => {
  return (
    <main className="">
      <h1>Password generator</h1>
      <PasswordTable generatedPassword={""} />
      <PasswordSettings />
    </main>
  );
};

export default App;
