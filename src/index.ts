import { resolve } from "path";
import { readFileSync } from "fs";

type BinObject = {
  [key: string]: string
};

export const getPackageBin = (packagePath: string, binKey?: string) => {
  const packageFile = `${packagePath}/package.json`;

  let packageInfo;

  try {
    packageInfo = JSON.parse(readFileSync(packageFile, { encoding: "utf8" }));
  } catch (error) {
    throw error;
  }

  const binObj: BinObject = {};

  switch (typeof packageInfo.bin) {
    case "object":
      Object.entries(packageInfo.bin as BinObject).forEach(([binKey, binPath]) => {
        binObj[binKey] = resolve(packagePath, binPath);
      });
      break;
    case "string":
      binObj[packageInfo.name] = resolve(packagePath, packageInfo.bin);
      break;
    default:
  }

  return binKey !== undefined ? binObj[binKey] : binObj;
};
