import React, { useState } from "react";
import { Button, Form, Card, Image } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./api/firebase_auth";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login (e.g., redirect to a different page)
      console.log("User logged in");
    } catch (error) {
      // Handle login error (e.g., display an error message)
      setError(error.message);
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Card className="w-50 rounded-4">
        <Card.Body>
          <h2>Log In</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <div className="d-flex align-items-center">
                <div className="mr-2">
                  <Image
                    src="/Icons/remix-icons/line/user/Vector.png"
                    alt="User Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address or Username"
                  id="Username"
                  name="Username"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="d-flex justify-content-between align-items-center">
                <div className="mr-2">
                  <Image
                    src="/Icons/remix-icons/line/system/Vector.png"
                    alt="User Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  id="Password"
                  name="Password"
                />
                <Button
                  onClick={() => {
                    setPasswordShown(!passwordShown);
                  }}
                  variant="light"
                >
                  <Image
                    src="/Icons/Vector.png"
                    alt="User Icon"
                    width={20}
                    height={20}
                  />
                </Button>
              </div>
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </div>
            {error && <p className="text-danger">{error}</p>}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
