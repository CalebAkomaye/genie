import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Modal = ({ url }) => {
  return (
    <>
      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box p-2'>
          <AudioPlayer autoPlay src={url} />
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
