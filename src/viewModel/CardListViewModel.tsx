//@ts-nocheck
import React, { useEffect } from 'react';
import { Share } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CardItem, CreateCardRespone } from '../network/apiResponses/card';
import { createCard, deletedCard, duplicateCard, shareCard } from '../network/controllers/cardController';
import { IApiResponse } from '../network/IApiResponse';
import CartListScreen from '../screens/CardListScreen';
import { getCardList, setCards } from '../store/card';

const CardListViewModel = () => {
    const {cardList, isLoading} = useSelector(state => state.card)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCardList());
      
    }, []);

    const _addFoodStyle = async () => {
        const cardResult: IApiResponse<CreateCardRespone> = await createCard();
        if (cardResult.isSuccess) {
          const card: CardItem = cardResult.data?.createCard;
          dispatch(setCards([...cardList, card]));
        }
    };

    const _deleteFoodStyle = async (id: string) => {
        const cardResult: IApiResponse<CreateCardRespone> = await deletedCard(id);
        if (cardResult.isSuccess) {
         const res = cardList.filter(x => x.id != id)
          dispatch(setCards([...res]));
        }
    };

    const _duplicateFoodStyle = async (id: string) => {
        const cardResult: IApiResponse<CreateCardRespone> = await duplicateCard(id);
        if (cardResult.isSuccess) {
          const card: CardItem = cardResult.data?.duplicateCard;
          dispatch(setCards([...cardList, card]));
        }
    };

    const _shareFoodStyle = async (id: string) => {
        const cardResult: IApiResponse<CreateCardRespone> = await shareCard(id);
        const shareCardId = cardResult.data?.shareCard;
        if (cardResult.isSuccess) {
        await Share.share({
            url: `https://cards.foodstyles.com/${shareCardId}`
        })
    }
    };

  return <CartListScreen 
    cardData={cardList}
    loading={isLoading}
    addFoodStyle={_addFoodStyle}
    deleteFoodStyle= {_deleteFoodStyle}
    duplicateFoodStyle={_duplicateFoodStyle}
    shareFoodStyle={_shareFoodStyle}
  />
  
};

export default CardListViewModel;
