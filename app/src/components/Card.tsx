import { useContext } from "react";
import "./Card.css";
import { LanguageContext } from "./LanguageContext";

interface CardProps {
  src: string;
  title: string;
  duration: number;
  category: string;
}

export default function Title({ src, title, duration, category }: CardProps) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="Card">
      <img src={src}></img>
      <div className="Category">{category}</div>
      <div>
        <span className="Title">{title}</span>
        <span className="Duration">{language === "en" ? `Duration: ${duration} days` : `Trajanje: ${duration} dana`}</span>
      </div>
    </div>
  );
}
