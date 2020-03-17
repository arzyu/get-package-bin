# get-package-bin

Get bin object from package.json

## Installation

```shell
npm add get-package-bin
```

## Usage

```typescript
import { getPackageBin } from "get-package-bin";

const binObj = getPackageBin("./node_modules/typescript");
/*
{
  tsc: "/PATH/TO/node_modules/typescript/bin/tsc",
  tsserver: "/PATH/TO/node_modules/typescript/bin/tsserver"
}
*/

const bin = getPackageBin("./node_modules/typescript", "tsc");
// "/PATH/TO/node_modules/typescript/bin/tsc"
```
