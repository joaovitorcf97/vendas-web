import axios, { AxiosRequestConfig } from 'axios';

import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from '../../constants/errosStatus';
import { MethodsEnum } from '../../enums/methods.enum';
import { getAuhtorizationToken } from './auth';

export type MethodType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export default class ConnectionAPI {
  static async call<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: getAuhtorizationToken(),
        'Content-Type': 'application/json',
      },
    };

    switch (method) {
      case MethodsEnum.POST:
      case MethodsEnum.PUT:
      case MethodsEnum.PATCH:
        return (await axios[method]<T>(url, body, config)).data;
      case MethodsEnum.GET:
      case MethodsEnum.DELETE:
      default:
        return (await axios[method]<T>(url, config)).data;
    }
  }

  static async connect<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
    return ConnectionAPI.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const connnetionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodsEnum.GET);
};

export const connnetionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodsEnum.DELETE);
};

export const connnetionAPIPost = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodsEnum.POST, body);
};

export const connnetionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodsEnum.PUT, body);
};

export const connnetionAPIPatch = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodsEnum.PATCH, body);
};
