const devLink = {
  id: 'Uid',
  firstDevlinker: {
    id: 'daadaadaah',
    img: 'https://avatars1.githubusercontent.com/u/60481383?s=460&v=4',
  },
  createdAt: '2020',
  tags: ['Webpack'],
  comment: 'Webpack 기본 지식 잘 나온 링크',
  url: 'https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html',
  thumbnail: 'https://jeonghwan-kim.github.io/assets/imgs/me.jpg',
  title: '프론트엔드 개발환경의 이해: 웹팩(기본)',
};

Feature('Home');

Scenario('로고가 보인다.', ({ I }) => {
  I.amOnPage('/');

  I.see('#Dev');
});

Scenario('Link 아이템이 보인다.', ({ I }) => {
  I.amOnPage('/');

  I.see(devLink.firstDevlinker.id);
  I.see(devLink.createdAt);

  devLink.tags.forEach((tags) => {
    I.see(tags);
  });

  I.see(devLink.comment);

  I.see(devLink.title);
});
