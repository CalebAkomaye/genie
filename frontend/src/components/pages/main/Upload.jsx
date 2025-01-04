import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../../store/AuthStore';

const Upload = () => {
  const { transcribeAudio, text, isLoading } = useAuthStore();
  const [audio, setAudio] = useState(null);

  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudio(file);
    }
  };

  const handleUpload = async () => {
    if (!audio) {
      toast.error('Please select a file before uploading');
      return;
    }

    const formData = new FormData();
    formData.append('audio', audio);

    try {
      // Assuming transcribeAudio is an async function
      await transcribeAudio(formData);
      toast.success('File uploaded successfully');
    } catch (error) {
      toast.error('Failed to upload file: ' + error.message);
      console.error(error);
    }

    // If you need to preview the file URL (for example, if it's an audio or video file)
    const fileURL = URL.createObjectURL(audio);
    console.log(fileURL);
  };

  useEffect(() => {
    console.log(text);
  }, [isLoading]);

  return (
    <div className='join mt-2'>
      <input
        type='file'
        onChange={handleChangeFile}
        className='file-input file-input-bordered file-input-md w-full max-w-xs join-item'
      />
      <button
        type='submit'
        onClick={handleUpload}
        className='btn join-item rounded-r-full'
      >
        Upload
      </button>
    </div>
  );
};

export default Upload;
