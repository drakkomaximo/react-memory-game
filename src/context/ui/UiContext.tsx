import { createContext } from 'react'
import { CardSelectedType, DisorderAnimalsType } from '../../interfaces';

interface ContextProps {
    cardsSelected: CardSelectedType[],
    images: DisorderAnimalsType[],
    getAnimalsImages: ({images}:{images : DisorderAnimalsType[]}) => void;
    selectCard: ({ imageId, id }: CardSelectedType) => void,
    updateAnimalsImages: ({ id }: { id: string }) => void,
    clearCardsSelected: () => void,
}

export const UiContext = createContext({} as ContextProps)