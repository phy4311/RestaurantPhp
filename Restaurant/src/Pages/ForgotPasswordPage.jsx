import { useState } from "react";
import InputField from "../Components/Input/InputField";
import Button from "../Components/Button/ButtonLogin";
import AuthLayout from "../Layouts/AuthLayout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Send reset link to:", email);
  };

  return (
    <AuthLayout title="Quên mật khẩu">
      <InputField
        label="Nhập Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex justify-center">
        <Button onClick={handleSubmit}>Gửi liên kết đặt lại</Button>
      </div>
    </AuthLayout>
  );
}
