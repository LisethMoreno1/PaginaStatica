import React, { useState } from 'react';
import { Menu, X, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar } from '../../atoms/avatar/Avatar';
import { AvatarImage } from '../../atoms/avatar/AvatarImage';
import Button from '../../atoms/button/Button';
import AppRouter from '../../../routes';
import Input from '../../atoms/input/Input';
import MenuItem from '../../molecules/Menu/MenuItem';

export default function Component() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const filteredRoutes = AppRouter.filter(route => route.sidebarProps);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside 
        className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${sidebarOpen ? 'block' : 'hidden'} lg:block`} 
      >
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-semibold">Logo</span>
          <Button variant="ghost" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav>
          <ul className="space-y-2">
            {filteredRoutes.map((route, index) => (
              <MenuItem key={index} item={route} onClick={toggleSidebar} /> // Pasar la función toggleSidebar
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center space-x-4">
              <Input type="search" placeholder="Search..." className="w-64" />
              <Button variant="ghost">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Card {i + 1}</h2>
                <p className="text-gray-600">This is some placeholder content for a card in the dashboard layout.</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
