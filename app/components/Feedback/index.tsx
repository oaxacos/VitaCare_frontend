import { actionAddFeedback } from './actions';
import { ListFeedback } from './list';

export default function Feedback() {
  return (
    <div>
      <form
        action={async (formData: FormData) => {
          'use server';
          const text = formData.get('text') as string;
          const name = formData.get('name') as string;
          try {
            await actionAddFeedback(text, name);
          } catch (error) {
            if (error instanceof Error) {
              console.error(error.message);
            }
            console.error('Error al enviar el feedback');
          }
        }}
      >
        <input
          type="text"
          placeholder="Escribe algo"
          name="text"
          id="text"
          className="border-2 border-gray-300 rounded-md p-2 mb-4"
        />
        <input
          type="text"
          placeholder="tu nombre"
          name="name"
          id="name"
          className="border-2 border-gray-300 rounded-md p-2 mb-4"
        />
        <button type="submit">Enviar</button>
      </form>
      <ListFeedback />
    </div>
  );
}
