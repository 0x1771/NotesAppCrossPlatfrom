import { Note } from '../types/models';

export const createTestNote = (): Note => ({
  id: Date.now().toString(),
  title: 'Test Note',
  content: 'This is a test note content',
  category: ['test'],
  isFavorite: false,
  isArchived: false,
  createdAt: new Date(),
  updatedAt: new Date(),
});

export const validateNote = (note: Note): boolean => {
  return (
    typeof note.id === 'string' &&
    typeof note.title === 'string' &&
    typeof note.content === 'string' &&
    Array.isArray(note.category) &&
    typeof note.isFavorite === 'boolean' &&
    typeof note.isArchived === 'boolean' &&
    note.createdAt instanceof Date &&
    note.updatedAt instanceof Date
  );
};