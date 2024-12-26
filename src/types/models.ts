export interface Note {
  id: string;
  title: string;
  content: string;
  category: string[];
  color?: string;
  isFavorite: boolean;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
  folderId?: string;
  attachments?: Attachment[];
  reminders?: Reminder[];
}

export interface Attachment {
  id: string;
  type: 'image' | 'video' | 'audio' | 'document';
  url: string;
  name: string;
}

export interface Reminder {
  id: string;
  date: Date;
  isCompleted: boolean;
  description: string;
  calendarEventId?: string;
}

export interface Folder {
  id: string;
  name: string;
  color?: string;
  parentId?: string;
}

export interface SearchFilters {
  query?: string;
  categories?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  isFavorite?: boolean;
  isArchived?: boolean;
  folderId?: string;
}