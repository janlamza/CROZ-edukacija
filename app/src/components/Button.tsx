import "./Button.css";

interface TitleProps {
  title: string;
  subtitle?: string;
}

export default function Button({ title }: TitleProps) {
  return (
    <>
      <div>
        <button className="button">{title}</button>
      </div>
    </>
  );
}
