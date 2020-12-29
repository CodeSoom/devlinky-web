import { db } from '../firebase/firebase';

export async function temp() { // TODO : 삭제 예정
  return null;
}

export async function getDevLinks() {
  const response = await db.collection('devlink').get();

  return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}
