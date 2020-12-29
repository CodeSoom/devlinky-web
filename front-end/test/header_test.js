Feature('Header');

const pages = [
  '/',
  '/not-exist',
];

const devLink = {
  id: 'Uid',
  firstDevlinker: {
    id: 'daadaadaah',
    img: 'https://avatars1.githubusercontent.com/u/60481383?s=460&v=4',
  },
  createdAt: '2020',
  tags: ['Webapck'],
  comment: 'Wepack 기본 지식 잘 나온 링크',
  url: 'https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html',
  thumbnamil: 'https://jeonghwan-kim.github.io/assets/imgs/me.jpg',
  title: '프론트엔드 개발환경의 이해: 웹팩(기본)',
};

Scenario('로고를 클릭하면 메인 페이지가 보인다.', (I) => {
  pages.forEach((page) => {
    I.amOnPage(page);

    I.click('Dev');

    I.see(devLink.firstDevlinker.id);
    I.see(devLink.createdAt);

    devLink.tags.forEach((tags) => {
      I.see(tags);
    });

    I.see(devLink.comment);

    I.see(devLink.title);
  });
});
