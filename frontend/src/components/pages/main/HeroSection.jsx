import HomeButtons from './HomeButtons';

const HeroSection = () => {
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-[48rem]'>
          <h1 className='text-5xl font-bold'>Hi there</h1>
          <p className='py-6 max-w-md mx-40'>
            {/* Easily manage your APIs and keys with our comprehensive
            documentation platform. Seamless integration, clear guides, and
            secure key management—all in one place. */}
            Unlock seamless audio transcription and text-to-speech conversion.
            Our API effortlessly turns audio into text and text into clear,
            natural speech.
          </p>
          <div className='flex items-center gap-3'>
            <HomeButtons
              text={
                'Try it Now! Explore our demo and see how our API seamlessly transforms audio to text and text to speech in real time.'
              }
              refr={'demo'}
              bt={'Try it now'}
            />
            <HomeButtons
              text={
                'Dive into the Docs! Everything you need to integrate our powerful audio and text-to-speech API into your projects.'
              }
              refr={'docs'}
              bt={'See docs'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
