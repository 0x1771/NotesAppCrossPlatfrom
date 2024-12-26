import { Calendar } from '@nativescript/calendar';
import { LocalNotifications } from '@nativescript/local-notifications';
import { Reminder } from '../types/models';

export class ReminderService {
  static async scheduleReminder(reminder: Reminder): Promise<void> {
    await LocalNotifications.schedule([{
      id: parseInt(reminder.id),
      title: 'Note Reminder',
      body: reminder.description,
      at: reminder.date,
    }]);
  }

  static async addToCalendar(reminder: Reminder): Promise<string> {
    const calendar = new Calendar();
    const event = {
      title: reminder.description,
      startDate: reminder.date,
      endDate: new Date(reminder.date.getTime() + 3600000),
      notes: 'Added from Notes App',
    };
    
    const eventId = await calendar.createEvent(event);
    return eventId;
  }
}