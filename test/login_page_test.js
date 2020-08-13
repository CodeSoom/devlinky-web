Feature('Login');

Scenario('Login 페이지가 보인다.', (I) => {
  I.amOnPage('/login');

  I.see('Login 페이지는 준비중입니다');
});
