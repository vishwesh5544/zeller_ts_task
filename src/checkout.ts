import { PricingRule, StandardPricing } from "./interfaces";

export class Checkout {
  private items: Map<string, number>;
  private pricingRules: PricingRule[];

  constructor(pricingRules: PricingRule[]) {
    this.items = new Map<string, number>();
    this.pricingRules = pricingRules;
  }

  scan(item: string): void {
    const itemCount = this.items.get(item);
    this.items.set(item, itemCount ? itemCount + 1 : 1);
  }

  total(): number {
    let total = 0;
    for (const rule of this.pricingRules) {
      total += rule.apply(this.items);
    }

    // Add cost for items without special rules
    const standardPricing: StandardPricing = {
      mbp: 1399.99,
      vga: 30.0,
    };
    for (const [item, count] of this.items) {
      if (!(item in standardPricing)) continue;
      total += standardPricing[item] * count;
    }

    return total;
  }
}
