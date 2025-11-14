import { useState, type ChangeEvent, type FormEvent } from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./CourseApply.css";

export default function CourseApply() {
  const [name, setName] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data: Record<string, unknown> = {};

    formData.forEach((value, name) => {
      data[name] = value;
    });

    console.log(data);

    const errors: Record<string, string> = {};
    if (!data.firstName) {
      errors.firstName = "Ime je obavezno polje";
    }
    if (!data.lastName) {
      errors.lastName = "Prezime je obavezno polje";
    }

    setFormErrors(errors);
  };
  return (
    <div className="CourseApply">
      <Title title={`Prijava za ${name}`} />
      <form onSubmit={onSubmit} className="courseForm">
        <Input name="firstName" label="First Name" error={formErrors.firstName} />
        <Input name="lastName" label="Last Name" error={formErrors.lastName} />
        <Input name="company" label="Company" />
        <Input name="email" label="Email" />
        <Input name="message" label="Message" className="GridSpan2" />
        <Button label="Apply" type="submit" />
      </form>
    </div>
  );
}
