// src/components/Navbar.tsx
"use client"
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex border flex-row justify-around p-2">
    <div className='flex'>
      <Link href="/">
        <p className='text-2xl font-bold'>YASANTH</p>
      </Link>
      <p className='text-2xl'>™</p>
    </div>
      <div className='flex gap-5'>
        <p>Home</p>
        <p>About</p>
        <p>Skills</p>
        <p>Resume</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}
