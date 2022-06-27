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
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI1LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU0NjcyNTExLCJleHAiOjE2NTUyNzczMTF9.AXbyzStSXyJwuEc8j6bHYkJudKvhIjNVNOGKINasmLvBfqQS9WRgtFaLUBmmczfyZGKeBVQ0VD0uWLdXyAujtwlTWkuWgeTJvLaJovHy3WaFvAC0_buiyCEx_NstCGD9obzj-SeYRMKb5EfPwLCD5FoyvUO_ZXUfXWlofobMFwmANVVbVMYma6mllNWSiCtRvHY1Xbg2Z0ueor4rAVW4V6MSJNscamNgzr_5EPsJi72VP334Xtn6Bk1oBO6VPQSn8lOp6c3QRxWxKgm62hn3iZ3I9QcNfDwOVlJW7af76ScIQDsu6ZT3iWjoH4ucBHubNCCWZwgbau1ATBwiGCmIFg',
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
