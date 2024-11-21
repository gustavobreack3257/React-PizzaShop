import { api } from '@/lib/axios'

export interface ApproveOrderParams {
  orderId: string
}
export async function deliverOrder({ orderId }: ApproveOrderParams) {
  await api.patch(`/orders/${orderId}/deliver`)
}
