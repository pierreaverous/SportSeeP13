import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * @description useFetch takes an url and a mock data file as arguments
 *
 * @param {string} url  The address url used for fetch the API
 * @param {string} mock  The mock datas used for fetch the datas
 *
 * @return {Object} Return user datas from API or mock data file
 */

function useFetch(url, mock) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const DATA_FROM_API = true

  useEffect(() => {
    if (DATA_FROM_API) {
      fetchData()
    } else {
      setData(mock)
    }
  }, [])

  /**
   * The function fetchData returns a promise that resolves to an object containing the data
   *
   * @return {Promise} Return user datas or error
   */

  async function fetchData() {
    try {
      const response = await axios.get(url)
      setData(response.data.data)
    } catch (error) {
      setError(true)

      console.log('erreur API / vérifier que votre serveur est bien lancé')
    }
  }
  return { data, error }
}

export default useFetch
