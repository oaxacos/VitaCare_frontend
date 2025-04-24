import { db } from '.';

interface Feedback {
  id: number;
  text: string;
  created_at: string;
  created_by: string;
}

export function getAllFeedback(): Promise<Feedback[]> {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM feedback`, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows as Feedback[]);
      }
    });
  });
}

export function addFeedback(text: string, created_by: string) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO feedback (text,created_by) VALUES (?,?)`,
      [text, created_by],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, text });
        }
      }
    );
  });
}

export function getById(id: number): Promise<Feedback> {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM feedback WHERE id = ?`, [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row as Feedback);
      }
    });
  });
}
