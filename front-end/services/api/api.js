import { db } from '../firebase/firebase';

export async function getDevLinks() {
  const response = await db.collection('devlink').get();

  return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function getUsers(userUids) {
  const responses = await db.collection('user').where('uid', 'in', userUids).get();

  return responses.docs.map((doc) => (doc.data()));
}

export async function addUser({ uid, githubId, githubProfile }) {
  await db.collection('user').doc(uid).set({
    uid,
    githubId,
    githubProfile,
  });

  const resaddUserInfo = { uid, githubId, githubProfile };

  return resaddUserInfo;
}

export async function getUser({ githubId }) {
  const responses = await db.collection('user').where('githubId', '==', githubId).get();

  return responses.docs.map((doc) => (doc.data()))[0];
}
