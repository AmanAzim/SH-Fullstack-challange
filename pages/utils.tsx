import { ingredients, sandwiches, structures } from "../clients/mockDB";

type GroupedSandwiche = {
    ingredientId: string | undefined;
    structureId: string | undefined;
    id: string;
    label: string;
    image: string;
}
  
type Row = {
    id: string;
    label: string;
    sandwiches: string[];
    description: string;
    groupedSandwiches: GroupedSandwiche[];
}

type Props = {
    ingredients: typeof ingredients;
    sandwiches: typeof sandwiches;
    structures: typeof structures;
}
  
export function getTableRows({ingredients, structures, sandwiches}: Props): Row[] {
    const updatedSandwiches = sandwiches.map((sandwiche) => {
        const { label } = sandwiche;
  
        const { id: ingredientId } = ingredients.find(({ sandwiches: ingSandws }) => ingSandws.includes(label)) || {};
        const { id: structureId } = structures.find(({ sandwiches: strSandws }) => strSandws.includes(label)) || {};
  
        return { ...sandwiche, ingredientId, structureId };
    });
  
    const row: Row[] = []
    structures.forEach((structure) => {
        const { id: strId } = structure;
    
        const groupedSandwiches: GroupedSandwiche[] = [];
    
        ingredients.forEach((ingredient) => {
            const { id: ingId } = ingredient;
            const rowSandwiche = updatedSandwiches.find(({ ingredientId, structureId }) => ingredientId === ingId && structureId === strId);
    
            if (rowSandwiche) {
            groupedSandwiches.push(rowSandwiche);
            }
        });
    
        row.push({ ...structure, groupedSandwiches });
    });
  
    return row;
}