'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [count, setCount] = useState(0);
  const messageList = [
    'From my github huh?',
    'Please wait, website is loading precious asset...',
    'Dont worry, no scarejump...'
  ]

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('https://bit.ly/3BlS71b');
    }, 11000);

    return () => clearTimeout(timeout);
  }, [router]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCount(count + 1);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [count]);


  return (
    <main className='flex flex-col justify-between items-center'>
      <h1 className="m-5 element transition-opacity hover:opacity-100">
        {messageList[count % messageList.length]}
      </h1>
      <div>
      </div>
      <style>
      </style>
    </main>
  )
}
