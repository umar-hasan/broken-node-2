const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('noon', () => {
    expect(timeWord("12:00")).toBe("noon")
  })

  test('midnight', () => {
    expect(timeWord("0:00")).toBe("midnight")
  })

  test('am', () => {
    expect(timeWord("1:01")).toBe("one oh one am")
  })

  test('pm', () => {
    expect(timeWord("13:01")).toBe("one oh one pm")
  })

  test('undefined if input not valid', () => {
    expect(timeWord("word")).toBe("Please enter a valid time.")
  })

  test('not valid if min not available', () => {
    expect(timeWord("12:")).toBe("Please enter a valid time.")
  })
  
  test('not valid if hour not available', () => {
    expect(timeWord(":01")).toBe("Please enter a valid time.")
  })
  
});