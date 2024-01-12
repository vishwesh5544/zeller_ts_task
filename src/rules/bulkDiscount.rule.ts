import { PricingRule } from "../interfaces";

export default class BulkDiscountRule implements PricingRule {
  apply(items: Map<string, number>): number {
    const itemCount = items.get("ipd") ?? 0;
    const normalPrice = 549.99;
    const discountPrice = 499.99;
    const pricePerItem = itemCount > 4 ? discountPrice : normalPrice;
    return pricePerItem * itemCount;
  }
}
