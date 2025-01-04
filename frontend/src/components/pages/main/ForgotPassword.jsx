import { motion } from 'motion/react';
import Container from '../../container';
import Button from '../../ui/button';
import { ArrowLeft, Mail } from 'lucide-react';
import { useState } from 'react';
import Input from '../../ui/Input';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../../store/AuthStore';
// import Input from '../../ui/Input';

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-md w-full bg-opacity-0 rounded-2xl shadow-xl overflow-hidden'
      >
        {!isSubmitted ? (
          <>
            <div className='p-8'>
              <h2 className='text-3xl mb-3 text-center'>Forgot Password</h2>
              <p className='text-center text-gray-400 mb-6'>
                Enter your email address and we&apos;ll send you a link to reset
                your password
              </p>
              <form onSubmit={handleSubmit}>
                <Input
                  icon={Mail}
                  type='email'
                  value={email}
                  placeholder='Email Address'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button text='Reset Password' styles='w-full' />
              </form>
            </div>
          </>
        ) : (
          <>
            <div className='text-center'>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className='w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4'
              >
                <Mail className='h-8 w-8 text-white' />
              </motion.div>
              <p className='text-gray-300 mb-6'>
                If an account exists for {email}, you will receive a password
                reset link shortly.
              </p>
            </div>
            <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center w-full'>
              <Link
                to={'/login'}
                className='text-sm text-gray-400 hover:underline inline-flex items-center'
              >
                <ArrowLeft className='h-4 w-4 mr-2' /> Back to Login
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </Container>
  );
};

export default ForgotPassword;
