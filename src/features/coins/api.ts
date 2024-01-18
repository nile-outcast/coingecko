export const getCoins = async (page: number) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${page}`
  )

  return res.json()
}
