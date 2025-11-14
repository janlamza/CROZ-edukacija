import type { CourseResponse } from "../model/course";

export async function getCourse(id: number): Promise<CourseResponse> {
  const response = await fetch(`/api/courses/${id}`);

  if (!response.ok) {
    throw new Error("Nes ne valja");
  }

  return response.json();
}

// 🔥 NEW – dohvat liste svih corsova
export async function getCourses(): Promise<CourseResponse[]> {
  const response = await fetch(`/api/courses`);

  if (!response.ok) {
    throw new Error("Ne mogu dohvatiti courses");
  }

  return response.json();
}