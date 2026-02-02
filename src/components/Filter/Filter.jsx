import React from 'react'

export const Filter = () => {
  return (
    <div>
        <p>Filters</p>
        <form action="">
            <input type="text" name='Book title:'/>
            <input type="text" name='The author:'/>
            <button type='submit'>To apply</button>
        </form>
    </div>
  )
}
