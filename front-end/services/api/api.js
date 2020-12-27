import { db } from '../firebase/firebase';

export async function fetchDevLinks() {
  const url = `${process.env.API_URL}/devlink/all`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function addUser({ firebaseUid, githubId, githubProfile }) {
  await db.collection('user').doc(firebaseUid).set({
    githubId,
    githubProfile,
  });

  return { id: firebaseUid, githubId, githubProfile };
}
