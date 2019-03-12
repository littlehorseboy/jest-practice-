it('will check the values and pass', () => {
  const user = {
    createdAt: new Date(),
    name: 'horse',
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    name: 'horse',
  });
});
