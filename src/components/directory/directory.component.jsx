import React from 'react';
import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({categories}) => {
  return (
    <div className="category">
      <div className="container-fluid">
        <div className="row">
          {categories.map(((category) => 
            <CategoryItem key={category.id} category={category} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Directory