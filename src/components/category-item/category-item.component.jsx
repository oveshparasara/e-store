import './category-item.styles.scss';

import React from 'react'

const CategoryItem = ({category}) => {
    const { title , imageUrl } = category;
  return (
    <div  className="col">
            <div className="category-item ch-400">
              <img src={imageUrl} alt={title} />
              <a className="category-name" href="/">
                <h2>{title}</h2>
                <p>Shop Now</p>
              </a>
            </div>
          </div>
  )
}

export default CategoryItem