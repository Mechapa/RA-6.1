import React from 'react'
import WatchItem from './WatchItem';

export default function WatchList(props) {
  const {watches, removeWatch} = props;

    return (
    <div className='watch-header'>
        { 
            watches.map( el => (
                <WatchItem 
                    key={el.id}
                    removeWatch={removeWatch} 
                    {...el}
                /> 
            ))
        }
    </div>
  )
}