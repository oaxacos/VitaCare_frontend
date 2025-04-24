import { getAllFeedback } from '@/app/infrastructure/db/feedback';
import Link from 'next/link';

async function getFeedbackList() {
  const data = await getAllFeedback();
  return data;
}
interface Feedback {
  id: number;
  text: string;
}

export async function ListFeedback() {
  const feedbackList: Feedback[] = await getFeedbackList();
  return (
    <div>
      <h1>Feedback List</h1>
      <ul>
        {feedbackList.map((feedback) => (
          <li key={feedback.id} className="underline hover:text-blue-500">
            <Link href={`/feedback/${feedback.id}`}>
              <p>{feedback.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
