const Triangle = require('./triangle.js');

describe('Triangle', () => {
  test('renders SVG with correct shape and text', () => {
    const triangle = new Triangle('#FF0000', 'Hello, world!', '#000000');
    const expectedSvg = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" transform="translate(50, -15)" fill="#FF0000" />
        <text x="152" y="135" font-size="60" text-anchor="middle" fill="#000000">Hello, world!</text>
      </svg>
    `;
    expect(triangle.render()).toBe(expectedSvg);
  });
});
