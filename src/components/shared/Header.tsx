import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className='container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4'>
        {/* Logo */}
        <Link href='/' className='text-xl font-semibold '>
          SkillsWave
        </Link>

        {/* Search Bar */}
        <div className='flex-1 mx-4'>
          <input
            type='text'
            placeholder='Search for courses'
            className='w-full border border-gray-300 rounded-md px-4 py-2'
          />
        </div>

        {/* Navigation Links */}
        <nav className='hidden md:flex space-x-4'>
          <Link href='/courses' className=''>
            Courses
          </Link>
          <Link href='/about' className=''>
            About
          </Link>
          <Link href='/contact' className=''>
            Contact
          </Link>
        </nav>

        {/* User Actions */}
        <div className='flex items-center pl-3'>
          <Link href='/sign-in' className=''>
            Login
          </Link>
          <Link href='/sign-up' className='  px-2 py-2 rounded-md '>
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
