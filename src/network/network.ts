import {APIConstants} from './APIConstants';
import axios from 'react-native-axios';
import {IApiResponse} from './IApiResponse';

async function getAxiosInstance() {
  const instance = axios.create({
    baseURL: APIConstants.BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI1LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjUzNDQzNzQ5LCJleHAiOjE2NTQwNDg1NDl9.t_P9z6S6nFtzs1aQrxT5bDzi5DqqofI65ggRqcggKR-TeNnw1EvzssVnwOWlk7N7uCCTE8EOi1OQ9dtTuYkBx13EeJv-hLtNY2ql27sO1tesJa99UAi41lgFwVqrr6qLyNIOtvpZgCBJb2TRoxuW5hQ4PCPIYidX9K4dMX0D7X9ROuwPuvCqmH75W_rTeTIl3PNGkJq64fdRkkS8NyP0S6k4BiFkKk2Cq8C6_2u0wIKlvMRM2PRgP821yemUX0uHFWoujlovraDGwYo21-VeeyGb3eAH3c1Rp1R19y341t7jfAGCCusAkNT5nG3NuVMteKIAcn-c4GEOMQNXchGmPw',
    },
  });

  return instance;
}

function handleResponse<T>(data: any) {
  let res: IApiResponse<T> = {
    isSuccess: true,
    errors: undefined,
    data: data as T,
  };
  return res;
}

function handleError<T>(data: any) {
  let res: IApiResponse<T> = {
    isSuccess: false,
    errors: data,
    data: undefined,
  };
  return res;
}

export async function sendPostRequest<T>(body: any, variables?: any) {
  try {
    console.log('body', body);
    let axiosInstance = await getAxiosInstance();
    var apiResponse = await axiosInstance.post(
      APIConstants.BASE_URL,
      JSON.stringify({query: body, variables: variables}),
    );
    if (apiResponse.status === 200) {
      //Success
      return handleResponse<T>(apiResponse.data.data);
    } else {
      //fail
      return handleError<T>(apiResponse);
    }
  } catch (ex) {
    return handleError(ex);
  }
}
