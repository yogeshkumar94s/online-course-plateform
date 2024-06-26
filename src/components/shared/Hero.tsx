import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className=' py-20'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mb-4'>Welcome to SkillsWave</h1>
          <p className='text-lg mb-6'>
            Empower your future with world-class courses
          </p>
          <Link href='/courses' className=' py-2 px-4 rounded'>
            Browse Courses
          </Link>
        </div>
      </section>

      <section className='py-16 '>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Course Categories
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {/* Replace with dynamic categories */}
            <div className=' p-6 rounded shadow'>
              <h3 className='text-xl font-semibold mb-4'>Category 1</h3>
              <ul>
                <li>
                  <Link href='/category/1/course/1' className='block mb-2'>
                    Course 1
                  </Link>
                </li>
                <li>
                  <Link href='/category/1/course/2' className='block mb-2'>
                    Course 2
                  </Link>
                </li>
                <li>
                  <Link href='/category/1/course/3' className='block mb-2'>
                    Course 3
                  </Link>
                </li>
              </ul>
            </div>
            {/* Repeat for other categories */}
          </div>
        </div>
      </section>

      <section className='py-16 '>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Testimonials</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {/* Replace with dynamic testimonials */}
            <div className=' p-6 rounded shadow'>
              <p className='mb-4'>
                This platform has transformed my learning experience!
              </p>
              <p className='font-semibold'>- Student A</p>
            </div>
            <div className=' p-6 rounded shadow'>
              <p className='mb-4'>
                The courses are well-structured and very informative.
              </p>
              <p className='font-semibold'>- Student B</p>
            </div>
            <div className=' p-6 rounded shadow'>
              <p className='mb-4'>
                I have gained so much knowledge from these courses.
              </p>
              <p className='font-semibold'>- Student C</p>
            </div>
            {/* Repeat for other testimonials */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
