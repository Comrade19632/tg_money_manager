import React from 'react'
import PropTypes from 'prop-types'

import style from './index.module.sass'
import AddCategoryIcon from './CategoryFieldIcon/AddCategoryIcon'
import DeleteIcon from './CategoryFieldIcon/DeleteIcon'

const CategoryField = (
  {
    icon, 
    title, 
    onClick,
    onClickDelete,
    hasDeleteIcon,
    className,
  }
) => {

  const clickHandler = () => {
    onClick()
  }

  return (
    <article className={`${style.category} ${className}`}>
      {hasDeleteIcon 
        ? <DeleteIcon 
          className={style.category__deleteIcon}
          onClick={onClickDelete}
        />
        : null
      }
      <button 
        className={style.category__interactionButton}
        onClick={clickHandler}
        type='button'>
        <div className={style.category__icon}>
          {icon}
        </div>
      </button>
      <p className={style.category__title}>
        {title}
      </p>
    </article>
  )
}

CategoryField.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  onClick: PropTypes.func,
  onClickDelete: PropTypes.func,
  hasDeleteIcon: PropTypes.bool,
  className: PropTypes.string,
}

CategoryField.defaultProps = {
  icon: <AddCategoryIcon />,
  title: 'добавить',
  onClick: () => {},
  onClickDelete: null,
  hasDeleteIcon: true,
  className: null,
}

export default CategoryField
