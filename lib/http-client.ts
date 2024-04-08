import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { getAuthToken } from './use-auth'
import { TODO } from '~/types/todo'

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
export enum ContentType {
  _json = 'application/json',
  _formData = 'multipart/form-data'
}

export interface HTTPClientProps {
  baseUrl?: string
  url?: string
  method?: RequestMethod
  contentType?: ContentType
  withAuth?: boolean
  body?: any
}

export interface HTTPClientResponseProps {
  status: number
  statusText: string
  data: TODO
}

export async function httpClient({
  baseUrl = process.env.baseApi,
  url = '',
  method = 'GET',
  contentType = ContentType._json,
  withAuth = true,
  body = null
}: HTTPClientProps): Promise<HTTPClientResponseProps | null> {
  const requestInit: RequestInit = {
    method,
    headers: {
      'Content-Type': contentType
    }
  }

  if (body) requestInit.body = contentType === ContentType._formData ? body : JSON.stringify(body).toString()
  if (withAuth) requestInit.headers = { ...requestInit.headers, Authorization: 'Bearer ' + getAuthToken() }

  try {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
    const response = await fetch(baseUrl + url, requestInit)

    if (method === 'DELETE') {
      return {
        status: response.status,
        statusText: response.statusText,
        data: await response.text()
      }
    }

    return {
      status: response.status,
      statusText: response.statusText,
      data: await response.json()
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
