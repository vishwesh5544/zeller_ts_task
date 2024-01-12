import { PricingRule } from "../interfaces";

export default class ThreeForTwoRule implements PricingRule {
  apply(items: Map<string, number>): number {
    const itemCount = items.get("atv") ?? 0;
    const pricePerItem = 109.5;
    return pricePerItem * (itemCount - Math.floor(itemCount / 3));
  }
}
