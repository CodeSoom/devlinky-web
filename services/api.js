export default async function fetchDevLinks() {
  const url = 'https://us-central1-devlinktag.cloudfunctions.net/app/api/devlinks';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
