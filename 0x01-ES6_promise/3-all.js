import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([userPhoto, user]) => {
      console.log(`${userPhoto.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => (console.log('Signup system offline')));
}
