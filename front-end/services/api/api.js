import { db } from '../firebase/firebase';

export default async function fetchDevLinks() {
  const url = `${process.env.API_URL}/devlink/all`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getDevLinks() {
  const response = await db.collection('devlink').get();

  return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}
