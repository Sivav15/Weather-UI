import React from 'react'

const Item = ({ item }) => {
    return (
        <div style={{ width: item.width, height: item.height, backgroundColor: 'red' }}>
            {item.content}
        </div>
    );
};

export default Item