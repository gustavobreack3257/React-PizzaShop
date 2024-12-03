import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  console.log('test', { from, to })
  try {
    const response = await api.get<GetDailyRevenueInPeriodResponse>(
      '/metrics/daily-receipt-in-period',
      {
        params: {
          from,
          to,
        },
      },
    )

    console.log('ressponse', response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
