export interface CourseResponse {
  id: number;
  src: string;
  title: string;
  type: string;
  duration: number;
}

export interface CreateAttendentRequest {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
  course: CourseResponse;
}
