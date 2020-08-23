export default async function fetchDevLinks() {
  const url = 'https://us-central1-devlinktag-dev.cloudfunctions.net/api/devlink/all'; // TODO : 임시로 dev DB 사용
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
