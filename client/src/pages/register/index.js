import React from "react";
import { Button, Form, Input } from "antd";
import { Link, link } from "react-router-dom"; // redirect ke liya use hota hai
const Register = () => {
    return (
      <>
      <header className="App-header ">
      <main className="main-area" mv-500 text-center px-3>
        <section className="left-section">
          <h1>Register to BookMyShow</h1>
        </section>
        <section className="right-section">
          <form layout="vertical">

          <Form.Item
              label="Name"
              htmlfor="name"
              name="name"
              className="d-block"
              rules={[{ required: true, message: "Name is required" }]}>
              <Input
                id="name"
                type="text"
                placeholder="Enter yor name "
              ></Input>
            </Form.Item>

            <Form.Item
              label="Email"
              htmlfor="email"
              name="email"
              className="d-block"
              rules={[{ required: true, message: "Email is required" }]}>
              <Input
                id="email"
                type="text"
                placeholder="Enter yor name "
              ></Input>
            </Form.Item>

            <Form.Item
              label="Password"
              htmlfor="password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "password is required" }]}>
              <Input
                id="Password"
                type="password"
                placeholder="Enter yor password "
              ></Input>
            </Form.Item>

            <Form.Item className="=d-block">
                <Button type="primary" block htmlType="submit" style={{fontSize: "irem", fontWeight:600 }}>
                    Register
                </Button>
            </Form.Item>
          </form>
          <div>
            <p>
                Already a User ?<Link to={"/login"}>Register Here </Link>
            </p>
          </div>
        </section>
      </main>
    </header>
      </>
    );
  };
  
  export default Register;
  