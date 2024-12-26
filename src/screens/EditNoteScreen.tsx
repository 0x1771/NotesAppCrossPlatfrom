import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { useNoteStore } from '../store/noteStore';
import { AIService } from '../services/aiService';
import { MediaService } from '../services/mediaService';
import { ReminderService } from '../services/reminderService';
import { Note } from '../types/models';

export function EditNoteScreen({ route, navigation }) {
  const { noteId } = route.params;
  const { notes, addNote, updateNote } = useNoteStore();
  const [note, setNote] = React.useState<Partial<Note>>({
    title: '',
    content: '',
    category: [],
    isFavorite: false,
    isArchived: false,
  });

  React.useEffect(() => {
    if (noteId) {
      const existingNote = notes.find(n => n.id === noteId);
      if (existingNote) {
        setNote(existingNote);
      }
    }
  }, [noteId]);

  const handleSave = async () => {
    const updatedNote = {
      ...note,
      id: note.id || Date.now().toString(),
      updatedAt: new Date(),
      createdAt: note.createdAt || new Date(),
    } as Note;

    if (noteId) {
      updateNote(updatedNote);
    } else {
      addNote(updatedNote);
    }
    navigation.goBack();
  };

  const startVoiceRecording = async () => {
    await AIService.startVoiceRecognition();
  };

  const takePicture = async () => {
    const image = await MediaService.takePicture();
    // Handle image attachment
  };

  return (
    <gridLayout rows="auto, *, auto" className="p-4">
      <textField
        row={0}
        text={note.title}
        hint="Title"
        className="text-xl p-2"
        onTextChange={(args) => setNote({ ...note, title: args.value })}
      />
      <textView
        row={1}
        text={note.content}
        hint="Start typing..."
        className="p-2"
        onTextChange={(args) => setNote({ ...note, content: args.value })}
      />
      <gridLayout row={2} columns="auto, auto, *, auto" className="p-2">
        <button col={0} text="🎤" className="mr-2" onTap={startVoiceRecording} />
        <button col={1} text="📷" className="mr-2" onTap={takePicture} />
        <button col={3} text="Save" className="bg-blue-500 text-white p-2 rounded" onTap={handleSave} />
      </gridLayout>
    </gridLayout>
  );
}