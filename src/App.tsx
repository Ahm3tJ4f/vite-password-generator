import PasswordSettings from "./components/PasswordSettings";
import PasswordTable from "./components/PasswordTable";
const App = () => {
  return (
    <main className="flex flex-col items-center my-16 space-y-6">
      <h1 className="text-[#939299] font-normal text-2xl">
        Password generator
      </h1>
      <PasswordTable generatedPassword={""} />
      <PasswordSettings />
    </main>
  );
};

export default App;
