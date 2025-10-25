export interface Drink {
    id: number;
    name: string;
    images: {
        front: string;
        back: string;
    };
    ingredients: string[];
    steps: string[];
    mocktail: string;
    glassware: string;
}