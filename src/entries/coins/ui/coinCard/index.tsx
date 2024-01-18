import cn from 'classnames'
import Image from 'next/image'
import type { Coin } from 'src/features/coins/types'
import { formatPrice } from 'src/shared/libs'
import { InfoRow } from '../infoRow'
import styles from './coinCard.module.css'

type Props = {
  coin: Coin
}

export const CoinCard = ({ coin }: Props) => {
  const { symbol, name, image, current_price, price_change_24h, market_cap } = coin

  const isPositive = price_change_24h > 0

  return (
    <div className={styles.card}>
      <div className={styles.card_title}>
        <Image src={image} alt={symbol} width={40} height={40} />
        <div>
          <h4>{name}</h4>
          <p className={styles.symbol}>{symbol}</p>
        </div>
      </div>

      <div className={styles.info}>
        <InfoRow
          label="Price, $"
          value={
            <h4>
              {formatPrice(current_price)}
              <span
                className={cn(
                  styles.price_change,
                  styles[`price_change_${isPositive ? 'positive' : 'negative'}`]
                )}
              >
                {isPositive && '+'}
                {formatPrice(price_change_24h)}
              </span>
            </h4>
          }
        />

        <InfoRow label="Market cap, $" value={formatPrice(market_cap)} />
      </div>
    </div>
  )
}
