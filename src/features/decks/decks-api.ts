import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})


export type Author = {
  id: string;
  name: string;
}

export type Deck = {
  author: Author;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  shots: number;
  cover: string;
  created: string;
  updated: string;
  cardsCount: number;
}

export type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

export type GetDecksResponse = {
  items: Deck[];
  pagination: Pagination;
  maxCardsCount: number;
}

export type AddDeckResponse = Omit<Deck, 'author' | 'shots'>


export const decksAPI = {
  getDecks() {
    return instance.get<GetDecksResponse>('v2/decks')
  },
  addDeck(name: string) {
    return instance.post<AddDeckResponse>('v1/decks', { name: name })
  }
}