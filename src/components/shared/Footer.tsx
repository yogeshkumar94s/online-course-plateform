import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-200 py-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company */}
          <div>
            <h2 className='text-lg font-semibold mb-4'>Company</h2>
            <ul>
              <li className='mb-2'>
                <Link href='/about' className='hover:text-white'>
                  About Us
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/careers' className='hover:text-white'>
                  Careers
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/press' className='hover:text-white'>
                  Press
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/blog' className='hover:text-white'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h2 className='text-lg font-semibold mb-4'>Community</h2>
            <ul>
              <li className='mb-2'>
                <Link href='/students' className='hover:text-white'>
                  Students
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/instructors' className='hover:text-white'>
                  Instructors
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/partners' className='hover:text-white'>
                  Partners
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/affiliate' className='hover:text-white'>
                  Affiliate
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className='text-lg font-semibold mb-4'>Support</h2>
            <ul>
              <li className='mb-2'>
                <Link href='/help' className='hover:text-white'>
                  Help Center
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/contact' className='hover:text-white'>
                  Contact Us
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/terms' className='hover:text-white'>
                  Terms
                </Link>
              </li>
              <li className='mb-2'>
                <Link href='/privacy' className='hover:text-white'>
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className='text-lg font-semibold mb-4'>Follow Us</h2>
            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white'
              >
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-700 pt-4'>
          <p className='text-center text-sm text-gray-400'>
            &copy; {new Date().getFullYear()} SkillsWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
