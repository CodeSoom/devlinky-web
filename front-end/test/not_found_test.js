Feature('NotFound');

Scenario('존재하지 않는 url로 접근했을 때 NotFound 페이지가 보인다.', ({ I }) => {
  I.amOnPage('/any_not_exist_url');

  I.see('404 Not Found');
});
