import React from 'react';
import { Link } from 'react-router-dom';
import { RouteType } from '../../../routes/route'; // Ajusta la ruta a la ubicación correcta

interface SubMenuItemProps {
  item: RouteType;
  onClick: () => void; // Incluye onClick aquí también

}

const SubMenuItem: React.FC<SubMenuItemProps> = ({ item, onClick }) => {
  const Icon = item.sidebarProps?.icon || null;

  return (
    <Link
      to={item.path || '/'}
      className="flex items-center px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {Icon && (
        <div className="flex-shrink-0 mr-3">
          <Icon className="w-4 h-4 text-gray-300" />
        </div>
      )}
      <span className="text-sm font-medium">{item.sidebarProps?.displayText}</span>
    </Link>
  );
};

export default SubMenuItem;
