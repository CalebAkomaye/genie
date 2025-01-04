import { Link } from 'react-router-dom';
import Button from '../../ui/button';

const HomeButtons = ({ text, refr, bt }) => {
  return (
    <div>
      <div className='card bg-base-100 w-96 shadow-xl hover:cursor-pointer'>
        <div className='card-body'>
          <Link to={`/${refr}`}>
            <p className='mb-3'>{text}</p>
            <Button text={bt} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeButtons;
