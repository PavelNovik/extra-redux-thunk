import { useEffect } from 'react'
import { decksAPI } from '../decks-api'
import s from './DecksList.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { setDeckAC } from '../decks-reducer'
import { DeckItem } from './DeckItem/DeckItem'
import { selectDecks } from '../decks-selectors'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)
  useEffect(() => {
    decksAPI.getDecks().then(res => dispatch(setDeckAC(res.data.items)))
  }, [])

  return <ul className={s.list}>
    {decks && decks.map(i => <DeckItem key={i.id} deck={i} />)}
  </ul>
}
