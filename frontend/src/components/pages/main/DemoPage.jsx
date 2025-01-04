import Layout from './layout';
import Upload from './Upload';
import TextBoard from './textBoard';
// import toast from 'react-hot-toast';
import { AudioLines } from 'lucide-react';
import { LoaderCircle } from 'lucide-react';
import { useAuthStore } from '../../../store/AuthStore';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import Modal from './Modal';
import toast from 'react-hot-toast';

const DemoPage = () => {
  const { audio, isLoading, synthesize } = useAuthStore();
  // const [play, setPlay] = useState(false);
  // const [num, setNum] = useState(0);

  const text = 'Hello, user. testing out the api?';
  const handlePlay = () => {
    toast.error('Audio support coming soon');
    return;
    //   handleAudio();
    //   setNum(Math.floor(Math.random() * 10));
    //   // document.getElementById('my_modal_2').showModal();
    //   console.log('play');
    //   setPlay(true);
  };
  // const handleAudio = () => {
  //   try {
  //     if (!audio) synthesize(text);
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  // const showModal = () => {
  //   if (!play) return;
  //   document.getElementById('my_modal_2').showModal();
  // };

  // useEffect(() => {
  //   showModal();
  //   console.log(play);
  // }, [num]);

  // if (isLoading && !isCheckingAuth) {
  //   toast.loading('Transcribing please wait..');
  // }
  return (
    <Layout>
      <div className='hero bg-base-200 min-h-screen p-0'>
        <div className='hero-content text-center'>
          <div className='max-w-[48rem]'>
            {text && (
              <button className='btn btn-circle mb-2' onClick={handlePlay}>
                {isLoading ? (
                  <LoaderCircle className='animate-spin' />
                ) : (
                  <AudioLines />
                )}
              </button>
            )}
            <Modal url={audio} />

            <TextBoard text={text} />
            <Upload />
            <div className='mt-1'>
              <Link
                to='/docs'
                className='font-xs text-gray-500 hover:underline'
              >
                Go to docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DemoPage;
