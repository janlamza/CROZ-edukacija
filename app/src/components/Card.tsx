import { useContext } from "react";
import "./Card.css";
import { LanguageContext } from "./LanguageContext";
import { useNavigate } from "react-router";

interface CardProps {
  id: number;
  src: string;
  title: string;
  duration: number;
  type: string;
}

export default function Title({ id, src, title, duration, type }: CardProps) {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <div className="Card" onClick={() => navigate(`${id}/apply`)}>
      <img src={src}></img>
      <div className="Category">{type}</div>
      <div>
        <span className="Title">{title}</span>
        <span className="Duration">{language === "en" ? `Duration: ${duration} days` : `Trajanje: ${duration} dana`}</span>
      </div>
    </div>
  );
}
