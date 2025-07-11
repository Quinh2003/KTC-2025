import AuthPage from "./Afternoon/Form-In-Up/Pages/AuthPage";
import LoginForm from "./Afternoon/Form_Login/LoginForm";
import RegisterForm from "./Afternoon/Form_Register/RegisterForm";
import RegistrationForm from "./Homework/RegistrationForm";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      {/* // Afternoom */}
      <AuthPage />
      <RegisterForm />
      <LoginForm />

      {/* // Homework */}
      <RegistrationForm />
    </div>
  );
}
export default App;