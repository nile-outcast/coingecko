export const getCoins = (page: number) => {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${page}`
  ).then((res) => res.json())
}
