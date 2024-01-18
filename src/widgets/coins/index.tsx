'use client'
import { CoinCard } from 'src/entries/coins/ui/coinCard'
import { EmptyContent } from 'src/entries/coins/ui/emptyContent'
import { useGetCoins } from 'src/features/coins/model'
import { Button } from 'src/shared/ui/button'
import { CenteredContent } from 'src/shared/ui/centeredContent'
import styles from './coins.module.css'

export const CoinsList = () => {
  const { data, error, size, setSize, isValidating } = useGetCoins()

  if (error && !data) {
    return <EmptyContent text={'Something went wrong. \n Please try again later.'} />
  }

  if (!data) {
    return <EmptyContent text={'L o a d i n g . . .'} />
  }

  return (
    <>
      <div className={styles.list}>
        {data.map((coins) => coins.map((coin) => <CoinCard key={coin.id} coin={coin} />))}
      </div>

      <CenteredContent position="top">
        <h3 className={styles.loading}>
          {(isValidating && 'L o a d i n g . . .') || (error && "Can't load more data")}
        </h3>

        <Button disabled={isValidating} onClick={() => setSize(size + 1)}>
          Fetch more
        </Button>
      </CenteredContent>
    </>
  )
}
