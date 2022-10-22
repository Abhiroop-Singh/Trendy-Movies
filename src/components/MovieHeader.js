import React from 'react'

function MovieHeader(props){

    const onChange = (event)=>{
        console.log(event.target.value);
        props.setSearchMovie(event.target.value);  
    }

    return (
        <div className='col col-sm-3'>
            <input 
                className='form-control' 
                placeholder='type here to search....'
                value={props.searchMovie}
                onChange={onChange} 
            />
        </div>
    )
}

export default MovieHeader;