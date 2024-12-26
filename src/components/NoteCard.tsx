import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { Note } from '../types/Note';

interface NoteCardProps {
  note: Note;
  onPress: () => void;
}

export function NoteCard({ note, onPress }: NoteCardProps) {
  return (
    <gridLayout
      className={`m-2 p-4 rounded-lg ${note.color || 'bg-white'}`}
      rows="auto, auto"
      columns="*, auto"
      onTap={onPress}
    >
      <label row={0} col={0} className="text-lg font-bold" text={note.title} />
      <label row={0} col={1} className="text-sm text-gray-500">
        {new Date(note.updatedAt).toLocaleDateString()}
      </label>
      <label row={1} col="0" colSpan={2} className="text-gray-600 mt-1">
        {note.content.substring(0, 100)}...
      </label>
    </gridLayout>
  );
}