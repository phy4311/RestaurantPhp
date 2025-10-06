import { useState } from "react";
import InputField from "../Components/Input/InputField";
import Button from "../Components/Button/ButtonLogin";
import AuthLayout from "../Layouts/AuthLayout";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
  };

  return (
    <AuthLayout title="Đăng nhập">
      <InputField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Mật khẩu"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex justify-center">
        <Button onClick={handleLogin}>Login</Button>
      </div>

      {/* <Button onClick={handleLogin}>Đăng nhập</Button> */}
      <div className="mt-4 text-center">
        <Link
          to="/forgot-password"
          className="text-back-500 hover:text-back-700 transition-colors duration-200"
        >
          Quên mật khẩu?
        </Link>
      </div>
    </AuthLayout>
  );
}
