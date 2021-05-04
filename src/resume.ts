import {pug, yaml} from "../deps.ts";

// @ts-ignore
console.dir(await yaml.parse(await Deno.readTextFile(`./resume.yaml`)));
console.dir(pug.name);
console.dir(pug.compileFile);
