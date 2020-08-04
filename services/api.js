export async function fetchDevLinks() {
  const url = 'http://localhost:3000/devlinks';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// TODO : 삭제 예정
export async function temp() {
  return null;
}
