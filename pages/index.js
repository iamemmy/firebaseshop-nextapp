import Link from 'next/link';
import { SignInButton, SignOutButton, UserProfile } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='home'>
      <div className='cta'>
        <SignOutButton/>
        <SignInButton />
      </div>
      <div className='profile'>
        <UserProfile />
      </div>
    </div>
  )
}
