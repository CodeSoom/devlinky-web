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
    {
      id: 4,
      name: '장단점',
    },
    {
      id: 5,
      name: '역사',
    },
    {
      id: 6,
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

Feature('Home');

Scenario('로고가 보인다.', (I) => {
  I.amOnPage('/');

  I.see('#Dev');
});

Scenario('Link 아이템이 보인다.', (I) => {
  I.amOnPage('/');

  I.see(devLink.object.name);

  devLink.tags.forEach(({ name }) => {
    I.see(name);
  });

  devLink.reviews.forEach(({ name }) => {
    I.see(name);
  });

  I.see(devLink.writtenAt);
});
