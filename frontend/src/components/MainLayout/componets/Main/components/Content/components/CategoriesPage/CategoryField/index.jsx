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
  }
) => {

  const clickHandler = () => {
    onClick()
  }

  return (
    <article className={style.container}>
      {hasDeleteIcon 
        ? <DeleteIcon 
          className={style.deleteIcon}
          onClick={onClickDelete}
        />
        : null
      }
      <button 
        onClick={clickHandler}
        type='button'>
        {icon}
      </button>
      <p className={style.category}>
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
}

CategoryField.defaultProps = {
  icon: <AddCategoryIcon />,
  title: 'добавить',
  onClick: () => {},
  onClickDelete: null,
  hasDeleteIcon: true,
}

export default CategoryField
