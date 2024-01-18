import useSWRInfinite from 'swr/infinite'
import { getCoins } from './api'
import type { Coin } from './types'

export const useGetCoins = () => {
  const getKey = (page: number) => `${page + 1}`

  return useSWRInfinite<Coin[]>(getKey, getCoins)
}
