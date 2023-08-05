import NavBar from '@/components/NavBar';
import HomePage from '@/components/HomePage';
import ServicePage from '@/components/ServicePage';
import Work from '@/components/Work';
import Business from '@/components/Business';
import Review from '@/components/Review';

export default function Home() {
  return (
    <main>
      <NavBar />
      <HomePage />
      <ServicePage />
      <Work />
      <Business />
      <Review />
    </main>
  )
};
