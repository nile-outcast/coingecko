const formatter = new Intl.NumberFormat('ru')

export const formatPrice = (num: number) => formatter.format(num)
