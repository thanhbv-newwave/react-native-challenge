import {
  CardListItem,
  CreateCardRespone,
  DeleteCardRespone,
} from '../../network/apiResponses/card';
import {
  createCard,
  deletedCard,
  getCardData,
} from '../../network/controllers/cardController';
import {IApiResponse} from '../../network/IApiResponse';
import { getCard } from '../../redux/selectors/cardSelector';
import {FetchCardService} from '../application';
import {AddCardService} from '../application/addCard';

export class CardService implements FetchCardService {
  async getCard(): Promise<IApiResponse<CardListItem>> {
    const cardResult: IApiResponse<CardListItem> = await getCardData();
    return cardResult;
  }
  // async addCard(): Promise<IApiResponse<CreateCardRespone>> {
  //   const cardResult: IApiResponse<CreateCardRespone> = await createCard();
  //   return cardResult;
  // }
  // async deleteCard(id: string): Promise<IApiResponse<DeleteCardRespone>> {
  //   const cardResult: IApiResponse<DeleteCardRespone> = await deletedCard(id);
  //   return cardResult;
  // }
}
