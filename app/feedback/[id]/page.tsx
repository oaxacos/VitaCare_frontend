import { getById } from '@/app/infrastructure/db/feedback';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Feedback({ params }: { params: { id: string } }) {
  const { id } = params;
  const feedback = await getById(Number(id));

  if (!feedback) {
    throw redirect('/');
  }
  return (
    <div className="grid grid-rows-4 justify-items-center min-h-1/2 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Feedback</h1>
      <h2>
        Creado por <strong>{feedback.created_by}</strong>
      </h2>
      <p>
        <span>Mensaje escrito: </span>
        <strong>{feedback.text}</strong>
      </p>
      <p>{formatDate(feedback.created_at)}</p>
      <Link
        href="/"
        className="bg-black text-white p-2 rounded-md hover:bg-gray-800"
      >
        <p>Volver</p>
      </Link>
    </div>
  );
}

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(date).toLocaleDateString('es-MX', options);
};
