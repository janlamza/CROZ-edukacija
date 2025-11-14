import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./CoursePage.css";
import { getCourse, getCourses } from "../api/CourseApi";
import type { CourseResponse } from "../model/course";

export default function CoursePage() {
  const [courses, setCourses] = useState<CourseResponse[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    getCourses().then((data) => {
      setCourses(data);
      setLoading(false);
    });
  }, []);

  return <div className="content">{loading ? "loading" : courses.map((course) => <Card {...course} key={course.id} />)}</div>;
}
