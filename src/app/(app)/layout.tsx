import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
