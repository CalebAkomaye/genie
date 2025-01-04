const TextBoard = ({ text }) => {
  return (
    <div className='mockup-code text-left px-2 py-2 mb-3'>
      <code>
        {text ? (
          <p className='max-w-[46rem]'> {text}</p>
        ) : (
          <p className='max-w-[46rem] text-center'>
            {'Upload a file to see how it works'}
          </p>
        )}
      </code>
    </div>
  );
};

export default TextBoard;
