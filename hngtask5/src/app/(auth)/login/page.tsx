'use client';

import { Button, Input } from '@/components';
import { auth, loginSchema } from '@/config';
import { useSubmit } from '@/hooks';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoLockOpenSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Page = () => {
  const { register, handleSubmit, errors } = useSubmit(loginSchema);
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (data: Record<string, string>) => {
    try {
      const { email, password } = data;

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      router.push('/');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      switch (err.code) {
        case 'auth/user-not-found': {
          setError('Email is not registered');
          break;
        }
        case 'auth/wrong-password': {
          setError('Password is incorrect');
          break;
        }
        case 'auth/invalid-credential': {
          setError('Invalid credentials. Please check your email and password.');
          break;
        }
        default: {
          setError('An error occurred during login. Please try again later.');
          break;
        }
      }
    }
  };

  return (
    <div className="md:p-10 p-5 grid gap-10 w-full">
      <div>
        <h1>Login</h1>
        <p>Add your details below to get back into the app</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        <Input
          name="email"
          errors={errors}
          label="Email"
          placeholder="e.g. alex@email.com"
          register={register}
          type="emai"
          icon={<MdEmail size={20} />}
        />
        <Input
          name="password"
          errors={errors}
          label="Password"
          placeholder="e.g. password"
          register={register}
          type="password"
          icon={<IoLockOpenSharp size={20} />}
        />
        {error && <p className="text-red text-sm">{error}</p>}
        <Button text="Login" type="primary" />
        <p className="text-center">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-purple">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
