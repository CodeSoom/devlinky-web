import { db } from '../firebase/firebase';

export async function fetchDevLinks() {
  const url = `${process.env.API_URL}/devlink/all`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function addUser({ githubId, githubProfile }) {
  const doc = await db.collection('user').add({
    githubId,
    githubProfile,
  });

  const resSignupInfo = { githubId, githubProfile };

  resSignupInfo.id = doc.id;

  return resSignupInfo;
}
