const assert = require('assert');

Feature('Header');

const pages = [
  '/',
  '/login',
  '/not-exist',
];

const devLink = {
  id: 2,
  url: 'http://jeonghwan-kim.github.io/2018/07/16/react-app-overview.html',
  writtenAt: '2020/01',
  object: {
    id: 1,
    name: 'React',
    color: '#61dafb',
    img:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  },
  tags: [
    {
      id: 1,
      name: '장단점',
    },
    {
      id: 2,
      name: '역사',
    },
    {
      id: 3,
      name: '등장배경',
    },
  ],
  reviews: [
    {
      id: 1,
      name: '덕후',
    },
    {
      id: 2,
      name: '쏙쏙',
    },
  ],
  createdAt: '2020-02-01 14:12',
  updatedAt: null,
  deletedAt: null,
};

Scenario('로고를 클릭하면 메인 페이지가 보인다.', (I) => {
  pages.forEach((page) => {
    I.amOnPage(page);

    I.click('Dev');

    I.see(devLink.object.name);

    devLink.tags.forEach(({ name }) => {
      I.see(name);
    });

    devLink.reviews.forEach(({ name }) => {
      I.see(name);
    });

    I.see(devLink.writtenAt);
  });
});

Scenario('로그인 버튼을 클릭하면 로그인 페이지가 보인다.', async (I) => {
  I.amOnPage('/');

  I.click('로 그 인');

  const url = await I.grabCurrentUrl();

  assert.equal(/\/login/.test(url), true);
});
