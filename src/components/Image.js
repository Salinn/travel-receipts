import React from 'react';

const Image = ({ row, accessor, CustomFunction }) => {
    const clicked = () => CustomFunction({ imageURL: row[accessor] });
    return <span style={{height: 200, width: 200, backgroundColor: 'grey'}}>
            <img onClick={ clicked } src={ row[accessor] } className="img-fluid" width="200" height="200" alt=''/>
          </span>
}

export default Image;
