import React from 'react'

const Weather_Week = () => {
  return (
    <div className='min-h-full flex flex-col'>
        <div className='bg-yellow-400 w-full'>
            7 days Weather<br/>City name, state code and country code divided by comma, Please, refer
          to ISO 3166 for the state codes or country codes. You can specify the
          parameter not only in English. In this case, the API response should
          be returned in the same language as the language of requested location
          name if the location is in our predefined list of more than 200,000
          locations.City name, state code and country code divided by comma,
          Please, refer to ISO 3166 for the state codes or country codes. You
          can specify the parameter not only in English. In this case, the API
          response should be returned in the same language as the language of
          requested location name if the location is in our predefined list of
          more than 200,000 locations.
        </div>
        <div className='bg-orange-600 w-full'>
            Todays Highlights<br/>City name, state code and country code divided by comma, Please, refer
          to ISO 3166 for the state codes or country codes. You can specify the
          parameter not only in English. In this case, the API response should
          be returned in the same language as the language of requested location
          name if the location is in our predefined list of more than 200,000
          locations.City name, state code and country code divided by comma,
          Please, refer to ISO 3166 for the state codes or country codes. You
          can specify the parameter not only in English. In this case, the API
          response should be returned in the same language as the language of
          requested location name if the location is in our predefined list of
          more than 200,000 locations.
        </div>
    </div>
  )
}

export default Weather_Week;