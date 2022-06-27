import {DeleteCardRespone} from '../../network/apiResponses/card';
import {IApiResponse} from '../../network/IApiResponse';

export interface DeleteCardService {
  deleteCard: (id: string) => Promise<IApiResponse<DeleteCardRespone>>;
}

export class DeleteCard {
  deleteCardService: DeleteCardService;

  constructor(deleteCardService: DeleteCardService) {
    this.deleteCardService = deleteCardService;
  }

  async deleteCard(id: string): Promise<IApiResponse<DeleteCardRespone>> {
    return this.deleteCardService.deleteCard(id);
  }
}
