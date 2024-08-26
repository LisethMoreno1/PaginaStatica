import { TvIcon } from "@heroicons/react/24/solid"

const LogoutButton = () => (
  <div className="p-4 border-t">
    <button className="flex items-center text-red-500 hover:text-red-600">
      <TvIcon  className="mr-3" />
      Cerrar sesión
    </button>
  </div>
)

export default LogoutButton
