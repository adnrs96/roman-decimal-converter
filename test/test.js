const { convert } = require('../src/convert')

it('should convert decimal to roman', () => {
  expect(convert(1)).toEqual('I')
})

it('should convert roman to decimal', () => {
  expect(convert('I')).toEqual(1)
})
