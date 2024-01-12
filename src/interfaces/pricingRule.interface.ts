// pricing rule interface to be implemented by all pricing rules
export default interface PricingRule {
  apply(items: Map<string, number>): number;
}
