export function getToday() {
  return new Date()
    .toLocaleString('en-us', {weekday: 'long'})
    .toLocaleUpperCase();
}

export function greeting() {
  return [
    'What are you doing that early?',
    'Good morning',
    'Good afternoon',
    'Good evening',
  ][parseInt((new Date().getHours() / 24) * 4)];
}
