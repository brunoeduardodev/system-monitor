import useSWR from 'swr'

import api from '@services/api'

export default function useRequest<Data = any, Error = any>(
  url: string
): { data: Data; error: Error } {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url)
    const data = response.data

    return data
  })

  return { data, error }
}
