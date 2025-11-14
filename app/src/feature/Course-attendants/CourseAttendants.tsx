import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAttendants } from "../../api/CourseApi";
import type { CourseResponse } from "../../model/course";

interface Attendant {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  course: CourseResponse;
}

export default function CourseAttendants() {
  const { id } = useParams();
  const [attendants, setAttendants] = useState<Attendant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    getAttendants(Number(id))
      .then((data) => setAttendants(data))
      .catch(() => setError("Failed to load attendants."))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Attendants for Course {id}</h1>

      {loading && <p>Loading attendants...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "1rem" }}>
        {attendants.map((attendant) => (
          <AttendantCard key={attendant.id} attendant={attendant} />
        ))}
      </div>
    </div>
  );
}

function AttendantCard({ attendant }: { attendant: Attendant }) {
  return (
    <div
      className="attendantCard"
      style={{
        border: "1px solid #ddd",
        borderRadius: "6px",
        padding: "1rem",
        marginBottom: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <h3>
        {attendant.firstName} {attendant.lastName}
      </h3>
      <p>
        <strong>Email:</strong> {attendant.email}
      </p>
      <p>
        <strong>Company:</strong> {attendant.company}
      </p>
      <p>
        <strong>Message:</strong> {attendant.message}
      </p>
      <p>
        <strong>course:</strong> {attendant.course.title}
      </p>
    </div>
  );
}
