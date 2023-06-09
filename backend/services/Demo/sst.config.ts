import type { SSTConfig } from "sst";
import main from "./stack/index";

export default {
  config() {
    return {
      name: "Demo",
      region: "eu-west-1",
    };
  },
  stacks: main,
} satisfies SSTConfig;
