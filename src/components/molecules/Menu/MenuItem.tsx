import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubMenuItem from './SubMenuItem';
import { RouteType } from '../../../routes/route';

interface MenuItemProps {
  item: RouteType;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.sidebarProps?.icon || null;

  const handleToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return item.children && item.children.length > 0 ? (
    <div className="w-full">
      <div className="border-b border-gray-700">
        <button
          className="flex items-center w-full px-4 py-3 text-left text-white bg-gray-800 hover:bg-gray-700 rounded-md transition duration-300 ease-in-out"
          onClick={handleToggle}
        >
          {Icon && (
            <div className="flex-shrink-0 mr-3">
              <Icon className="w-5 h-5 text-gray-400" />
            </div>
          )}
          <span className="text-sm font-medium">{item.sidebarProps?.displayText}</span>
        </button>
      </div>
      {isOpen && (
        <div className="pl-6 bg-gray-800">
          {item.children.map((subItem, index) => (
            <SubMenuItem key={index} item={subItem} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  ) : (
    <div className="py-1">
      <Link
        to={item.path || '/'}
        className="flex items-center px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded-md transition duration-300 ease-in-out"
        onClick={onClick}
      >
        {Icon && (
          <div className="flex-shrink-0 mr-3">
            <Icon className="w-5 h-5 text-gray-400" />
          </div>
        )}
        <span className="text-sm font-medium">{item.sidebarProps?.displayText}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
