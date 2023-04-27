export interface Score {
    errors: number;
    pairs: number;
}

export interface User {
    name: string | null;
    numberOfGames: number;
    currentScore: Score
    globalScore: Score
} 

export const LoginType = 'userProfile'