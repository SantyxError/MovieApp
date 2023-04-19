
import { formatDate } from '../formatDate'


describe('a format date', () => {

  it('Le pasamos una fecha y nos tiene que devolver el año "2020"', () => {
    const date = "2020-03-20"
    expect(formatDate(date)).toEqual("2020")
  })

  it('Le pasamos una fecha y nos tiene que devolver el año "1986"', () => {
    const date = "1986-11-217"
    expect(formatDate(date)).toEqual("1986")
  })

})
