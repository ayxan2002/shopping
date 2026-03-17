import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register({ setUser }) {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка совпадения паролей
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Получаем существующих пользователей
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Проверка, существует ли пользователь с этим email
    if (users.find((u) => u.email === email)) {
      setError("User with this email already exists");
      return;
    }

    // Создаём нового пользователя
    const newUser = { firstName, lastName, email, password };
    users.push(newUser);

    // Сохраняем всех пользователей в localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Сохраняем залогиненного пользователя
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    // Обновляем user в App.jsx
    setUser(newUser);

    // Перенаправляем на главную страницу
    navigate("/");
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
