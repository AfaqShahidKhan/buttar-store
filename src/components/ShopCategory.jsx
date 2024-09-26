import React, { useContext } from 'react'
import dropdown_icon from 

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <img src={props.banner} />
        <div className='shopcategory-indexSort'>
            <p>
                <span>showing 1-12</span> out of 36 products
            </p>
            <div className='shopcategory-sort'>
                sort by <img src=" " />


            </div>

        </div>
      
    </div>
  )
}

export default ShopCategory
