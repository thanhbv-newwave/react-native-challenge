import {Card} from '../../card/domain';

export interface CardItem {
  id: string;
  name: string;
}

export interface CardListItem {
  cards: Card[];
}
export interface CreateCard {
  createCard: CardItem;
}

export interface CreateCardRespone {
  data: CreateCard;
}

export interface DeleteCardRespone {
  data: CreateCard;
}
