import players from './players'

describe ("players reducer", () => {
  const reducer = players
  const initialState = []

  it ('returns empty array for init state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
