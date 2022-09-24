CREATE TABLE IF NOT EXISTS notes (
  id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  content text
);
CREATE UNIQUE INDEX IF NOT EXISTS index_notes_on_id ON notes (id);
