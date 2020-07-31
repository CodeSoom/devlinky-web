import { devLink } from '../fixture/data';

Feature('Home');

Scenario('로고가 보인다.', (I) => {
  I.amOnPage('/');

  I.see('#Dev');
});

Scenario('Link 아이템이 보인다.', (I) => {
  I.amOnPage('/');

  devLink.objects.forEach(({ name }) => {
    I.see(name);
  });

  devLink.subjects.forEach(({ name }) => {
    I.see(name);
  });

  devLink.reviews.forEach(({ name }) => {
    I.see(name);
  });

  I.see(devLink.writtenAt);
});
