import React from 'react';

const Sanpham = (props) => {
    return (
        <div>
            <h1>Mã sản phẩm: { props.masanpham }</h1>
            <h2>Tên sản phẩm: { props.tensanpham }</h2>
            <h3>Giá: { props.gia }</h3>
            <p>{ props.children }</p>
        </div>
    )
}
export default Sanpham