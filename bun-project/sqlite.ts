import { Database } from "bun:sqlite";

const db = new Database(":memory:");
const query = db.query("select 'Bun' as runtime;");
const s = query.get(); // => { runtime: "Bun" }
console.log(s);
