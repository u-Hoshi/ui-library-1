'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <h2>atoms</h2>
        <Link href="/atoms">atoms</Link>
      </div>
      <div>
        <h2>organisms</h2>
        <Link href="/organisms/Form">organisms/Form</Link>
      </div>
    </>
  );
}
