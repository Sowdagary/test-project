import { api, getEndpoint } from "@/api"

import { IPayment } from "@/types/payments"
import { IResponseForSubmitEntity } from "@/api/types"

class Payment {
  public static CreatePayPal(
    qty: number,
    callback_url = `${process.env.SITE_BASE}/charge-wallet?type=charged-wallet`
  ) {
    return api.post<IResponseForSubmitEntity<IPayment>>(
      getEndpoint("payments"),
      {
        gateway: "paypal",
        quantity: qty,
        callback_url
      }
    )
  }

  public static Checkout(transaction_id: string) {
    return api.post(
      getEndpoint("paymentsCheckout", {
        id: transaction_id
      })
    )
  }
}
export default Payment
