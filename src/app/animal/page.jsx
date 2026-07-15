import path from "path";
import { promises as fs } from "fs";
import AnimalList from "./AnimalList";

export default async function AllAnimalPage() {

    const jsonDirectory = path.join(process.cwd(), "public");
    const fileContents = await fs.readFile(jsonDirectory + "/db.json", "utf8");


    const data = JSON.parse(fileContents);


    const animalsArray = data.animals || [];


    return <AnimalList initialAnimals={animalsArray} />;
}