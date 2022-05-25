export interface CardItem {
  id: string;
  name: string;
}

export interface CardListItem {
  cards: CardItem[];
}
export interface CreateCard {
  createCard: CardItem;
}

export interface CreateCardRespone {
  data: CreateCard;
}