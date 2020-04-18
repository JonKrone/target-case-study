export const capitalize = (word: string) =>
  word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()

export const cardinalNumMap: Record<string, string> = {
  1: 'SOUTHBOUND',
  2: 'EASTBOUND',
  3: 'WESTBOUND',
  4: 'NORTHBOUND',
  SOUTHBOUND: '1',
  EASTBOUND: '2',
  WESTBOUND: '3',
  NORTHBOUND: '4',
}
