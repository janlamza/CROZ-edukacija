import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import LanguageProvider, { LanguageContext } from "./components/LanguageContext";
import Dropdown from "./components/Dropdown";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router";
import CoursePage from "./feature/CoursePage";
import CourseApply from "./feature/course-apply/CourseApply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        index: true,
        element: <Navigate to="/courses" />,
      },
      {
        path: "courses",
        children: [
          { index: true, element: <CoursePage /> },
          { path: ":id/apply", element: <CourseApply /> },
        ], //:id znači da se radi o varijabli
      },
    ],
  },
]);

function AppContainer() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

function NavBar() {
  return (
    <div className="navBar">
      <Title title="Education" subtitle="Continuous education is one of the crucial factors for success." />
      <LanguagePicker />
    </div>
  );
}

function LanguagePicker() {
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    document.title = language;
  }, [language]);

  return (
    <Dropdown
      value={language}
      onValueChange={setLanguage}
      items={[
        { value: "hr", label: "HR" },
        { value: "en", label: "EN" },
      ]}
    />
  );
}

interface CounterProps {
  counter: number;
  incrementCounter: () => void;
}

function Counter({ counter, incrementCounter }: CounterProps) {
  return <button onClick={incrementCounter}> Click me: {counter}</button>;
}
export default App;
