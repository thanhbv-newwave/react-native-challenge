import {CardListItem} from '../../network/apiResponses/card';
import {IApiResponse} from '../../network/IApiResponse';

export interface FetchCardService {
  getCard: () => Promise<IApiResponse<CardListItem>>;
}

export class FetchCard {
  fetCardService: FetchCardService;

  constructor(fetCardService: FetchCardService) {
    this.fetCardService = fetCardService;
  }

  async fetchCard(): Promise<IApiResponse<CardListItem>> {
    return this.fetCardService.getCard();
  }
}
