import React from "react";

// 子组件
const ProductList = (props) => {
    return (
        <div>
            {
                props.webList.map((item, index) => {
                    return (
                        <ul>
                            <li key={index}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.desc}
                                </a>
                            </li>
                            </ul>
                    )
                })
            }
            
        </div>
    )
}

export default ProductList;