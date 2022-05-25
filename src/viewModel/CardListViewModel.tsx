//@ts-nocheck
import React, { useEffect } from 'react';
import { Share } from 'react-native';
import { CardItem, CardListItem, CreateCard, CreateCardRespone } from '../network/apiResponses/card';
import { createCard, deletedCard, duplicateCard, getCardData, shareCard } from '../network/controllers/cardController';
import { IApiResponse } from '../network/IApiResponse';
import CartListScreen from '../screens/CardListScreen';

const CardListViewModel = () => {
    const [cardData, setCardData] = React.useState<CardItem[]>([]);
    const [loading, setLoading] = React.useState(false);
    useEffect(() => {
      const getData = async () => {
        setLoading(true);
        const cardResult: IApiResponse<CardListItem> = await getCardData();
        if (cardResult.isSuccess) {
          const cardListResult: CardListItem = cardResult.data;
          setCardData(cardListResult.cards);
        }
        setLoading(false);
      };
      getData();
    }, []);

    const _addFoodStyle = async () => {
        const cardResult: IApiResponse<CreateCardRespone> = await createCard();
        if (cardResult.isSuccess) {
          const card: CardItem = cardResult.data?.createCard;
          setCardData([...cardData, card]);
        }
    };

    const _deleteFoodStyle = async (id: string) => {
        const cardResult: IApiResponse<CreateCardRespone> = await deletedCard(id);
        if (cardResult.isSuccess) {
         const res = cardData.filter(x => x.id != id)
          setCardData([...res]);
        }
    };

    const _duplicateFoodStyle = async (id: string) => {
        const cardResult: IApiResponse<CreateCardRespone> = await duplicateCard(id);
        if (cardResult.isSuccess) {
          const card: CardItem = cardResult.data?.duplicateCard;
          setCardData([...cardData, card]);
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
    cardData={cardData}
    loading={loading}
    addFoodStyle={_addFoodStyle}
    deleteFoodStyle= {_deleteFoodStyle}
    duplicateFoodStyle={_duplicateFoodStyle}
    shareFoodStyle={_shareFoodStyle}
  />
  
};

export default CardListViewModel;
