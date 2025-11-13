import { type ChangeEvent } from "react";
import "./Input.css";

interface InputProps {
  label: string;
  name: string;
  className?: string;
  error?: string;
}

export default function Input({ label, name, className, error }: InputProps) {
  return (
    <div className={`InputContainer ${className}`}>
      <label htmlFor={name}>{label}</label>
      <br></br>
      <input id={name} name={name} />
      <br></br>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
