const user = {
  uid: 'Uid1',
  githubId: 'daadaadaah',
  githubProfile: 'https://avatars1.githubusercontent.com/u/60481383?s=460&v=4',
};

Feature('UserPage');

Scenario('사용자 정보가 보인다.', (I) => {
  I.amOnPage('/user/daadaadaah');

  I.see(user.githubId);

  I.waitForInvisible({ xpath: `//img[@src='${user.githubProfile}']` });
});
