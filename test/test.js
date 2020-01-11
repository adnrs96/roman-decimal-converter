const { convert } = require('../src/convert')

it('should convert decimal to roman', () => {
  expect(convert(1)).toEqual('I')
  expect(convert(4)).toEqual('IV')
  expect(convert(5)).toEqual('V')
  expect(convert(10)).toEqual('X')
  expect(convert(50)).toEqual('L')
  expect(convert(100)).toEqual('C')
  expect(convert(500)).toEqual('D')
  expect(convert(1000)).toEqual('M')
})

it('should convert roman to decimal', () => {
  expect(convert('I')).toEqual(1)
  expect(convert('IV')).toEqual(4)
  expect(convert('V')).toEqual(5)
  expect(convert('X')).toEqual(10)
  expect(convert('L')).toEqual(50)
  expect(convert('C')).toEqual(100)
  expect(convert('D')).toEqual(500)
  expect(convert('M')).toEqual(1000)
})
