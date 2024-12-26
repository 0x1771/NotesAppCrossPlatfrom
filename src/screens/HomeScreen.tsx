import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { NoteList } from '../components/NoteList';
import { Note } from '../types/Note';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from '../NavigationParamList';

type HomeScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [notes, setNotes] = React.useState<Note[]>([]);

  const handleNotePress = (note: Note) => {
    navigation.navigate('EditNote', { noteId: note.id });
  };

  const handleAddNote = () => {
    navigation.navigate('EditNote', {});
  };

  return (
    <gridLayout rows="auto, *" className="bg-gray-100">
      <gridLayout row={0} columns="*, auto" className="p-4">
        <label col={0} className="text-2xl font-bold">My Notes</label>
        <button 
          col={1} 
          className="bg-blue-500 text-white rounded-full w-12 h-12"
          text="+"
          onTap={handleAddNote}
        />
      </gridLayout>
      <NoteList
        row={1}
        notes={notes}
        onNotePress={handleNotePress}
      />
    </gridLayout>
  );
}