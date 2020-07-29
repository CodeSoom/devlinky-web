Feature('Home');

Scenario('사이트 이름이 보인다.', (I) => {
  I.amOnPage('/');

  I.see('DevLink#');
});
