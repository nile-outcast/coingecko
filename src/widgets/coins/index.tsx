'use client'
import { CoinCard } from 'src/entries/coins'
import { useGetCoins } from 'src/features/coins'
import { Button, CenteredContent, EmptyContent } from 'src/shared/ui'
import styles from './coins.module.css'
import { helperTexts } from './constants'

export const CoinsList = () => {
  const { data, error, size, setSize, isValidating } = useGetCoins()

  if (error && !data) {
    return <EmptyContent text={helperTexts.somethingWentWrong} />
  }

  if (!data) {
    return <EmptyContent text={helperTexts.loading} />
  }

  return (
    <>
      <div className={styles.list}>
        {data.map((coins) => coins.map((coin) => <CoinCard key={coin.id} coin={coin} />))}
      </div>

      <CenteredContent position="top">
        <h3 className={styles.loading}>
          {(isValidating && helperTexts.loading) || (error && helperTexts.loadMoreError)}
        </h3>

        <Button disabled={isValidating} onClick={() => setSize(size + 1)}>
          Fetch more
        </Button>
      </CenteredContent>
    </>
  )
}
