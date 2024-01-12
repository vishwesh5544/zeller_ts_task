import { StandardPricing, PricingRule } from "./interfaces";
import { ThreeForTwoRule, BulkDiscountRule } from "./rules";
import { Checkout } from "./checkout";

// function to parse command line arguments
function parseArgsAndExecuteCommands(args: string[]): void {
  if (args.includes("--print-items")) {
    Checkout.printAvailableItems();
  } else {
    // set up pricing rules
    const pricingRules: PricingRule[] = [
      new ThreeForTwoRule(),
      new BulkDiscountRule(),
    ];

    // initialize checkout with pricing rules
    const co = new Checkout(pricingRules);

    // scan items from command line arguments
    args.forEach((sku) => co.scan(sku));

    // print total
    console.log(`Total expected: $${co.total()}`);
  }
}

parseArgsAndExecuteCommands(process.argv.slice(2));
