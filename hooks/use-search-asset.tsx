'use client'

import { useCallback, useEffect, useState } from 'react'
import { GetAssetsProps, getAssets } from '~/app/actions'
import { AggAssetItemProps } from '~/types/response'

export const useSearchAsset = () => {
  const [state, setState] = useState<{
    assets: AggAssetItemProps[]
    search: string
    pagination: {
      page: number
      pageSize: number
      pageCount: number
    }
  }>({
    assets: [],
    search: '',
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 0
    }
  })

  const getListAssets = useCallback(
    async (isSearch: boolean = false) => {
      const params: GetAssetsProps = isSearch
        ? { page: 1, pageSize: 10, search: state.search }
        : { page: state.pagination.page, pageSize: state.pagination.pageSize, search: state.search }
      const { assets, pagination } = await getAssets(params)

      setState(prevVal => ({ ...prevVal, assets, pagination }))
    },
    [state.pagination.page, state.pagination.pageSize, state.search]
  )

  const setSearch = (search: string) => {
    setState(prevVal => ({ ...prevVal, search }))
    getListAssets(true)
  }

  const onChangePage = ({ page, direction }: { page?: number; direction?: 'next' | 'prev' }) => {
    const tempPagination = { ...state.pagination }
    if (direction === 'prev') tempPagination.page--
    else if (direction === 'next') tempPagination.page++
    else if (page) tempPagination.page = page

    if (tempPagination.page > 0 && tempPagination.page <= tempPagination.pageCount) {
      setState(prevVal => ({ ...prevVal, pagination: tempPagination }))
    }
  }

  useEffect(() => {
    getListAssets()
  }, [getListAssets, state.pagination.page, state.pagination.pageSize])

  return {
    assets: state.assets,
    pagination: state.pagination,
    setSearch,
    onChangePage
  }
}
