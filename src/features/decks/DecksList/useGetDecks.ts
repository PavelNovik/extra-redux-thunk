import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { selectDecks } from '../decks-selectors'
import { getDeckTC } from '../decks-thunks'

export const useGetDecks = () => {
    const dispatch = useAppDispatch()
    const decks = useAppSelector(selectDecks)
    useEffect(() => {
        dispatch(getDeckTC())
    }, [])

    return { decks }
}