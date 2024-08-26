interface UserProfileProps {
    userName: string;
  }
  
 export const UserProfile: React.FC<UserProfileProps> = ({ userName }) => {
    return (
      <div className="flex items-center space-x-3">
        <div className="bg-gray-200 rounded-full p-2">
          <div  className="text-gray-600" />
        </div>
        <span className="text-sm font-medium">{userName}</span>
      </div>
    );
  };
  