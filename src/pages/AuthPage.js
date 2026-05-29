import React, { useState } from "react";

function AuthPage({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirm: ""
  });

  // ⭐ ERROR STATE
  const [errors, setErrors] = useState({});

  // 🔐 LOGIN
  const handleLogin = () => {
    const newErrors = {};

    if (!login.email.trim()) newErrors.email = "Email is required";
    if (!login.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

      if (
    login.email === "admin@gmail.com" &&
    login.password === "admin123"
  ) {
    setUser({
      email: login.email,
      role: "admin"
    });
    return;
  }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === login.email &&
      storedUser.password === login.password
    ) {
      setUser(storedUser);
    } else {
      alert("Invalid email or password");
    }
  };

  // 📝 REGISTER
  const handleRegister = () => {
    const newErrors = {};

    if (!register.name.trim()) newErrors.name = "Name is required";
    if (!register.email.trim()) newErrors.email = "Email is required";

    if (!register.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(register.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!register.gender) newErrors.gender = "Select gender";

    if (!register.password) newErrors.password = "Password is required";

    if (!register.confirm) {
      newErrors.confirm = "Confirm your password";
    } else if (register.password !== register.confirm) {
      newErrors.confirm = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    localStorage.setItem("user", JSON.stringify(register));
    alert("Registered successfully!");
    setIsLogin(true);
  };

  return (
    <div className="auth-wrapper">

      {/* LEFT */}
      <div className="auth-left">
        <h2>🛒 Grocery App</h2>
        <p>Fresh groceries delivered at your door 🚀</p>
      </div>

      {/* RIGHT */}
      <div className="auth-right">

        {isLogin ? (
          <>
            <h2>Login</h2>

            <input
              placeholder="Email"
              onChange={(e) =>
                setLogin({ ...login, email: e.target.value })
              }
            />
            <p className="error">{errors.email}</p>

            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setLogin({ ...login, password: e.target.value })
              }
            />
            <p className="error">{errors.password}</p>

            <button onClick={handleLogin}>Login</button>

            <p onClick={() => setIsLogin(false)}>
              Don't have an account? Register
            </p>
          </>
        ) : (
          <>
            <h2>Register</h2>

            <input
              placeholder="Full Name"
              onChange={(e) =>
                setRegister({ ...register, name: e.target.value })
              }
            />
            <p className="error">{errors.name}</p>

            <input
              placeholder="Email"
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            />
            <p className="error">{errors.email}</p>

            <input
              placeholder="Phone"
              onChange={(e) =>
                setRegister({ ...register, phone: e.target.value })
              }
            />
            <p className="error">{errors.phone}</p>

            {/* GENDER */}
            <div className="gender-box">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) =>
                    setRegister({ ...register, gender: e.target.value })
                  }
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) =>
                    setRegister({ ...register, gender: e.target.value })
                  }
                />
                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={(e) =>
                    setRegister({ ...register, gender: e.target.value })
                  }
                />
                Other
              </label>
            </div>
            <p className="error">{errors.gender}</p>

            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
            />
            <p className="error">{errors.password}</p>

            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) =>
                setRegister({ ...register, confirm: e.target.value })
              }
            />
            <p className="error">{errors.confirm}</p>

            <button onClick={handleRegister}>Register</button>

            <p onClick={() => setIsLogin(true)}>
              Already have an account? Login
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default AuthPage;