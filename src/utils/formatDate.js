export default function formatDate(dateString) {
  const date = dateString + 'T12:00:00';
  const dateObj = new Date(date);

  const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' });

  return formatter.format(dateObj);
}
