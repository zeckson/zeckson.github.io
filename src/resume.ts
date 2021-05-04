import {pug, yaml} from "../deps.ts";

const parseFile = async (filePath: string) => {
  /** Loading the file. */
// @ts-ignore
  const yamlFile = await Deno.readFile(filePath);

  /** Decoding the file text. */
  const yamlText = (new TextDecoder("utf-8")).decode(yamlFile);

  /** Returning parsed yaml as an object. */
  return await yaml.parse(yamlText);
}

console.dir(await parseFile(`./resume.yaml`));
console.dir(pug.name);
console.dir(pug.compileFile);
