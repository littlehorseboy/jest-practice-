import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link.jsx';

it('Link component renders correctly', () => {
  const tree = renderer.create(
    <Link page="https://www.instagram.com">Instagram</Link>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
