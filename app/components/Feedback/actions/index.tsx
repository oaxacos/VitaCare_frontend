'use server';

import { addFeedback } from '@/app/infrastructure/db/feedback';
import { revalidatePath } from 'next/cache';

export async function actionAddFeedback(text: string, userName: string) {
  if (!text) {
    throw new Error('Text is required');
  }

  try {
    await addFeedback(text, userName);

    revalidatePath('/');
  } catch (error) {
    console.error('Error al enviar el feedback', error);
  }
}
