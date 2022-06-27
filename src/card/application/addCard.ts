import {CreateCardRespone} from '../../network/apiResponses/card';
import {IApiResponse} from '../../network/IApiResponse';

export interface AddCardService {
  addCard: () => Promise<IApiResponse<CreateCardRespone>>;
}

export class AddCard {
  addCardService: AddCardService;

  constructor(addCardService: AddCardService) {
    this.addCardService = addCardService;
  }

  async fetchCard(): Promise<IApiResponse<CreateCardRespone>> {
    return this.addCardService.addCard();
  }
}
