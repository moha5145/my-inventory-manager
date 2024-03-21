import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdSave, MdCancel } from 'react-icons/md';

import { CategoriesContext } from '../../context-and-reducer/categories/categoriesContext';

import IconBtn from '../customButtons/IconBtn';
import AddCategory from './AddCategory';

  const isValueChanged = (category) => {
    return category.value === category.newCategory || category.newCategory === '';
  }

const Categories = () => {
  const { categoriesState, onChangeCategory, onChangeCategoryUpdate, addCategory, getCategories, updateCategory, saveUpdate, deleteCategory } = useContext(CategoriesContext);

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  const handleCancel = (index, category) => {
    updateCategory(index, 'editing', !category.editing);
    updateCategory(index, 'newCategory', '');
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-0 sm:p-4 bg-white rounded-md">
      <h2 className="text-xl font-semibold mb-4">Categories Management</h2>
      <AddCategory
        addCategory={addCategory}
        onChange={onChangeCategory}
        categoriesState={categoriesState}
      />
      <ul className="mt-4 space-y-2">
        {categoriesState.categories.map((category, index) => (
          <li key={category._id} className="flex items-center justify-between px-1 bg-gray-100 border-b border-gray-200 py-2 hover:bg-blue-50">
            {category.editing ? (
              <input 
                type="text"
                defaultValue={category.value}
                onChange={(e) => onChangeCategoryUpdate(index, 'newCategory', e.target.value)}
                className="w-full h-9 pl-1 mb-1 md:m-0 border border-gray-400 rounded-lg outline-orange-400"
              />
            ) : (
              <Link
                to={`/categories/${category.id}`}
                className="text-sm sm:text-md w-full h-full"
              >
                {category.label}
              </Link>
            )}

            <div className="flex gap-1">
              {category.editing ? (
                <div className="flex">
                  <IconBtn
                    Icon={MdCancel}
                    bgColor="bg-transparent"
                    textColor="text-red-400"
                    px="px-2"
                    onClick={() => handleCancel(index, category)}
                  />

                  {!isValueChanged(category) && (
                    <IconBtn
                      Icon={MdSave}
                      bgColor="bg-transparent"
                      textColor="text-green-400"
                      px="px-2"
                      onClick={() => saveUpdate(category._id, category.newCategory)}
                    />
                  )}
                </div>
              ) : (
                <IconBtn
                  Icon={MdEdit}
                  bgColor="bg-transparent"
                  textColor="text-orange-400"
                  px="px-2"
                  onClick={() => updateCategory(index, 'editing', !category.editing)}
                />
              )}

              <IconBtn
                Icon={MdDelete}
                bgColor="bg-transparent"
                textColor="text-red-400"
                px="px-2"
                onClick={() => deleteCategory(category) }
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
