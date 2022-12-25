import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const numSort = new Sorter(numbersCollection)
numSort.sort()
console.log(numbersCollection.data)

const charCollection = new CharactersCollection('Xaayb')
const charSort = new Sorter(charCollection)
charSort.sort()
console.log(charCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
const sortL = new Sorter(linkedList)
sortL.sort()
linkedList.print()
