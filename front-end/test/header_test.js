Feature('Header');

const pages = [
  '/',
  '/not-exist',
];

const devLink = {
  id: 'uuid1',
  firstDevlinker: {
    id: 'daadaadaah',
    img: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t31.0-1/cp0/c0.13.80.80a/p80x80/18237765_1282944051818757_9120627240636275285_o.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=0iQXIG4cESoAX_zTXan&_nc_ht=scontent-ssn1-1.xx&tp=27&oh=f0d27929e45d93d1e4f9aa659111f81f&oe=6009DB1E',
  },
  url: 'https://so4869.tistory.com/23',
  thumbnamil: 'https://i2.wp.com/css-tricks.com/wp-content/uploads/2018/12/guide-flexbox.png?fit=1200%2C600&ssl=1',
  title: '[HTML, CSS] 요소를 (상하좌우)정렬하기',
  tags: [{
    id: 'uuid2',
    name: 'React',
  }],
  comment: 'react의 간단 소개',
  createdAt: '2020-02-01 14:10',
};

Scenario('로고를 클릭하면 메인 페이지가 보인다.', (I) => {
  pages.forEach((page) => {
    I.amOnPage(page);

    I.click('Dev');

    I.see(devLink.createdAt);
    devLink.tags.forEach(({ name }) => {
      I.see(name);
    });

    I.see(devLink.comment);

    I.see(devLink.title);
  });
});
