export default function formatDate(dateString, weekDayValue = 'short') {
  const date = dateString + 'T12:00:00';
  const dateObj = new Date(date);

  const formatter = new Intl.DateTimeFormat('en-US', { weekday: weekDayValue });

  return formatter.format(dateObj);
}
