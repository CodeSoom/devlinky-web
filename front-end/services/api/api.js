export default async function fetchDevLinks() {
  const url = `${process.env.API_URL}/devlink/all`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
