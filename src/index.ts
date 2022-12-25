import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const numSort = new Sorter(numbersCollection)
numSort.sort()
console.log(numbersCollection.data)

const charCollection = new CharactersCollection('Xaayb')
const charSort = new Sorter(charCollection)
charSort.sort()
console.log(charCollection.data)
