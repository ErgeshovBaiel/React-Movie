import CategorySection from '../../components/category/CategorySection'
import HeroSection from '../../components/hero/HeroSection'
import MovieFilter from '../../components/movie-filter/MovieFilter'
import Search from '../../components/search/Search'
import Upcoming from '../../components/upcoming/Upcoming'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Search />
      <CategorySection/>
      <MovieFilter />
      <Upcoming />
    </div>
  )
}

export default HomePage
