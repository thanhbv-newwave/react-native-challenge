import {CARD_QUERY, CREATE_CARD, DELETE_CARD, DUPLICATE_CARD, SHARE_CARD} from './query';
import {sendPostRequest} from '../network';
import {CardListItem, CreateCardRespone} from '../apiResponses/card';

export const getCardData = async () => {
    return await sendPostRequest<CardListItem>(CARD_QUERY);
};

export const createCard = async () => {
    return await sendPostRequest<CreateCardRespone>(CREATE_CARD);
};

export const deletedCard = async (id: string) => {
    return await sendPostRequest<CreateCardRespone>(DELETE_CARD, {id: id});
};

export const duplicateCard = async (id: string) => {
    return await sendPostRequest<CreateCardRespone>(DUPLICATE_CARD, {id: id});
};

export const shareCard = async (id: string) => {
    return await sendPostRequest<CreateCardRespone>(SHARE_CARD, {id: id});
};
