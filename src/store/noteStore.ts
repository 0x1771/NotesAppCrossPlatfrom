import create from 'zustand';
import { Note, Folder } from '../types/models';
import { persist } from 'zustand/middleware';

interface NoteState {
  notes: Note[];
  folders: Folder[];
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  toggleFavorite: (id: string) => void;
  toggleArchive: (id: string) => void;
  addFolder: (folder: Folder) => void;
  deleteFolder: (id: string) => void;
}

export const useNoteStore = create<NoteState>()(
  persist(
    (set) => ({
      notes: [],
      folders: [],
      addNote: (note) =>
        set((state) => ({ notes: [...state.notes, note] })),
      updateNote: (updatedNote) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === updatedNote.id ? updatedNote : note
          ),
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
      toggleFavorite: (id) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, isFavorite: !note.isFavorite } : note
          ),
        })),
      toggleArchive: (id) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, isArchived: !note.isArchived } : note
          ),
        })),
      addFolder: (folder) =>
        set((state) => ({ folders: [...state.folders, folder] })),
      deleteFolder: (id) =>
        set((state) => ({
          folders: state.folders.filter((folder) => folder.id !== id),
        })),
    }),
    {
      name: 'note-storage',
    }
  )
);