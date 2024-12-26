import { ListView } from '@nativescript/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { Note } from '../types/Note';
import { NoteCard } from './NoteCard';

interface NoteListProps {
  notes: Note[];
  onNotePress: (note: Note) => void;
}

export function NoteList({ notes, onNotePress }: NoteListProps) {
  const renderItem = (item: Note) => {
    return <NoteCard note={item} onPress={() => onNotePress(item)} />;
  };

  return (
    <listView
      items={notes}
      cellFactory={renderItem}
      style={styles.list}
      separatorColor="transparent"
    />
  );
}

const styles = StyleSheet.create({
  list: {
    height: '100%',
    backgroundColor: 'transparent',
  },
});