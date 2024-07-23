'use client';

import { Button, Input } from '@/components';
import { auth, db, loginSchema } from '@/config';
import { useSubmit } from '@/hooks';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoLockOpenSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Page = () => {
  const { register, handleSubmit, errors } = useSubmit(loginSchema);
  const [error, setError] = useState<string>('');
  const usersRef = collection(db, 'userRef');
  const router = useRouter();

  const checkUserExistence = async (userId: string): Promise<boolean> => {
    try {
      const userRef = doc(usersRef, userId);
      const docData = await getDoc(userRef);
      return docData.exists();
    } catch {
      setError('An error occurred while checking user existence. Please try again later.');
      return false;
    }
  };

  const onSubmit = async (data: Record<string, string>) => {
    try {
      const { email, password } = data;

      // Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;

      if (user?.uid) {
        const authenticatedUserId = user.uid;

        // Check if the user already exists
        const isUserExisting = await checkUserExistence(authenticatedUserId);

        if (isUserExisting) {
          router.push('/');
          return;
        }

        // Save new user data
        const userData = {
          userId: authenticatedUserId,
          email: user.email,
          username: data.username
        };
        await setDoc(doc(usersRef, authenticatedUserId), userData);

        router.push('/');
      } else {
        setError('An error occurred during account creation. Please try again later.');
      }
    } catch {
      setError('An error occurred during account creation. Please try again.');
    }
  };

  return (
    <div className="md:p-10 p-5 grid gap-10 w-full">
      <div>
        <h1>Create Account</h1>
        <p>Let’s get you started sharing your links!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        <Input
          name="email"
          errors={errors}
          label="Email Address"
          placeholder="ben@example.com"
          register={register}
          type="email"
          icon={<MdEmail size={20} />}
        />
        <Input
          name="password"
          errors={errors}
          label="Create Password"
          placeholder="e.g. password"
          register={register}
          type="password"
          icon={<IoLockOpenSharp size={20} />}
        />
        <Input
          name="confirmPassword"
          errors={errors}
          label="Confirm Password"
          placeholder="e.g. password"
          register={register}
          type="password"
          icon={<IoLockOpenSharp size={20} />}
        />
        <p>Password must contain at least 8 characters.</p>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <Button text="Create Account" type="primary" />
        <p className="text-center">
          Already have an account?{' '}
          <Link href="/login" className="text-purple-600">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
