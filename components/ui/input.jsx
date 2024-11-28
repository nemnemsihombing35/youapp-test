import * as React from 'react';
import { Input } from '@/components/ui/input'; // Import Input yang benar
import Button from '@/components/ui/button'; // Misalnya import Button dari komponen yang benar
import Link from 'next/link'; // Navigasi antar halaman

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
      
      <section className="login-section w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        
        <form>
          <div className="form-group mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2">Username:</label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full"
              required
            />
          </div>
          
          <div className="form-group mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password:</label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full"
              required
            />
          </div>
          
          <Button type="submit" className="w-full">Login</Button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-sm">
            No account?{' '}
            <Link href="/register" className="text-blue-500 underline">Register here</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
