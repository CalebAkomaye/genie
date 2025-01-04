import toast from 'react-hot-toast';
import { useAuthStore } from '../../../store/AuthStore';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LoaderCircle } from 'lucide-react';

const ProfilePage = () => {
  const { logout, user, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logout();
      toast.success('Logout Successful');
      navigate('/login');
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center gap-3'>
        <div className='avatar placeholder'>
          <div className='bg-neutral text-neutral-content w-16 rounded-full'>
            <span className='text-xl font-bold tracking-wider'>
              {user.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        </div>
        <div>
          <input
            type='text'
            placeholder={user.name}
            className='input input-bordered w-full max-w-xs'
            disabled
          />
        </div>
        <div className='lg:tooltip' data-tip='Logout'>
          <button className='btn btn-square' onClick={handleLogout}>
            {isLoading ? <LoaderCircle className='animate-spin' /> : <LogOut />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
