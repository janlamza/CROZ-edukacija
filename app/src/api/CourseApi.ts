import type { CourseResponse, CreateAttendentRequest } from "../model/course";

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

export async function createAttendent(request: CreateAttendentRequest) {
  const response = await fetch(`/api/courses/${request.courseId}/attendants`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Nisam uspio kreirati");
  }
}

export async function getAttendants(courseId: number) {
  const response = await fetch(`/api/courses/${courseId}/attendants`);

  if (!response.ok) throw new Error("Cannot fetch attendants");

  return response.json();
}
