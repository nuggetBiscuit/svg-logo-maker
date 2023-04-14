const Square = require('./Square');

describe('Square', () => {
  test('renders correctly', () => {
    const square = new Square('blue', 'Hello', 'white');
    const svg = square.render();
    expect(svg).toContain('<rect width="150" height="150" transform="translate(75, 10)" fill="blue" />');
    expect(svg).toContain('<text x="152" y="115" font-size="60" text-anchor="middle" fill="white">Hello</text>');
  });
});
