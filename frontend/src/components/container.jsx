const Container = ({ children }) => {
  return (
    <div
      className='min-h-screen flex items-center justify-center
                  relative overflow-hidden'
    >
      {children}
    </div>
  );
};

export default Container;
