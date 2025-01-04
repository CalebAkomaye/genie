import { LoaderCircle } from 'lucide-react';

const Button = ({ styles, text, loading, icon }, ...props) => {
  return (
    <button {...props} className={`btn btn-wide ${styles}`}>
      {icon && icon}
      {loading ? <LoaderCircle className='animate-spin' /> : text}
    </button>
  );
};

export default Button;
