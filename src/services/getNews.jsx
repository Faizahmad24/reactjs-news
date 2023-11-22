/* eslint-disable no-undef */
// Service adalah sebuah function dimana di dalam sebuah function tersebut akan terjadi sebuah pemanggilan end point api dan akan langsung mereturn data dari endpoint tersebut

import axios from 'axios'
// let process
const NEWS_API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL
const NEWS_API_KEY = process.env.REACT_APP_API_KEY

export const getNews = async ({searchQuery = 'technology'}) => {
    try {
        const path = '/everything'
        const query = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`
        const endpointURL = `${NEWS_API_BASE_URL}${path}${query}`
        // console.log(endpointURL)

        const response = await axios.get(endpointURL)

        if (response.status === 200) {
            const additionalObject = {
                category: searchQuery
            }

            // meambah dan mengabungkan object additionalObject dengan object hasil responsen
            const responsedata = {
                ...response.data,
                ...additionalObject
            }

            return responsedata
        }


    } catch (error) {
        console.error('Error getting Tech News: ', error)
    }
}