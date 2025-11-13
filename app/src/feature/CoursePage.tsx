import Card from "../components/Card";
import "./CoursePage.css";

export default function CoursePage() {
  const courses = [
    {
      id: 1,
      src: "https://croz.net/app/uploads/2025/03/5a0ac8a2-cb0d-401a-b18a-a4890b9c5fe6.webp",
      title: "Course 1",
      duration: 24,
      category: "DEVOPS",
    },
    {
      id: 2,
      src: "https://croz.net/app/uploads/2025/03/untitled-design.jpg",
      title: "Course 2",
      duration: 30,
      category: "DEVOPS",
    },
    {
      id: 3,
      src: "https://croz.net/app/uploads/2025/03/cka-preview-image.jpg",
      title: "Course3",
      duration: 40,
      category: "DEVOPS",
    },
  ];

  return (
    <div className="content">
      {courses.map((course) => (
        <Card {...course} key={course.title} />
      ))}
    </div>
  );
}
