'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <h2>atoms</h2>
        <Link href="/atoms/button">・button</Link>
        <Link href="/atoms/box">・box</Link>
        <Link href="/atoms/typography">・typography</Link>
      </div>
      <div>
        <h2>organisms</h2>
        <Link href="/organisms/Form">organisms/Form</Link>
      </div>
    </>
  );
}
