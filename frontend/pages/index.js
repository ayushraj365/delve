import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Delve Assignment</h1>
      <nav>
        <ul>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/mfa">MFA Status</Link></li>
          <li><Link href="/rls">RLS Status</Link></li>
          <li><Link href="/pitr">PITR Status</Link></li>
        </ul>
      </nav>
    </div>
  );
}
