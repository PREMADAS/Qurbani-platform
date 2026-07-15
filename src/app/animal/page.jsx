import AnimalList from "./AnimalList";

export default async function AllAnimalPage() {
    const res = await fetch('http://localhost:3001/animals');
    const animals = await res.json();

    return <AnimalList initialAnimals={animals} />;
}