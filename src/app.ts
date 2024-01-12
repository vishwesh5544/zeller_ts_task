import { StandardPricing, PricingRule } from "./interfaces";
import { ThreeForTwoRule, BulkDiscountRule } from "./rules";
import { Checkout } from "./checkout";

// function to parse command line arguments
function parseArgs(args: string[]): string[] {
  return args.slice(2); // remove first two args (node and filename)
}

// set up pricing rules
const pricingRules: PricingRule[] = [
  new ThreeForTwoRule(),
  new BulkDiscountRule(),
];

// initialize checkout with pricing rules
const co = new Checkout(pricingRules);

// scan items
const skus = parseArgs(process.argv);
skus.forEach((sku) => co.scan(sku));

// print total
console.log(co.total());
