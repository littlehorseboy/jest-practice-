it('will fail every time', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'horse',
  };

  expect(user).toMatchSnapshot();
});
