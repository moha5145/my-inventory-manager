import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdAdd, MdSave, MdCancel } from 'react-icons/md';

import { CategoriesContext } from '../../context-and-reducer/categories/categoriesContext';

import { TextInput } from '../../shared/CustomInputs';
import IconBtn from '../customButtons/IconBtn';

  const isValueChanged = (category) => {
    return category.label === category.newCategory || category.newCategory === '';
  }

const Categories = () => {
  const { categoriesState, onChangeCategory, onChangeCategoryUpdate, addCategory, getCategories, updateCategory, saveUpdate, deleteCategory } = useContext(CategoriesContext);

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    onChangeCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(categoriesState.newCategory);
  };

  const handleCancel = (index, category) => {
    updateCategory(index, 'editing', !category.editing);
    updateCategory(index, 'newCategory', '');
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-0 sm:p-4 bg-white rounded-md">
      <h2 className="text-xl font-semibold mb-4">Categories Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <input
            type="text" 
            value={categoriesState.newCategory}
            onChange={handleChange}
            className="w-full h-9 pl-1 mb-1 md:m-0 border border-gray-400 rounded-lg outline-orange-400"
          />

          <IconBtn
            Icon={MdAdd}
            type="submit"
            bgColor="bg-blue-500"
            textColor="text-white"
            w="w-24"
          />
        </div>
      </form>
      <ul className="mt-4 space-y-2">
        {categoriesState.categories.map((category, index) => (
          <li key={category._id} className="flex items-center justify-between px-1 bg-gray-100 border-b border-gray-200 py-2 hover:bg-blue-50">
            {category.editing ? (
              <TextInput
                type="text"
                value={category.label}
                onChange={(e) => onChangeCategoryUpdate(index, 'newCategory', e.target.value)}
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
