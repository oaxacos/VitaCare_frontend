import { db } from '.';

export const migrate = () => {
  console.log('hola');
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS feedback (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_by TEXT
      );
    `,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log('articles table created successfully.');
      }
    );
  });
};

migrate();
