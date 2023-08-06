import Container from '@/components/ui/container'
import { Header } from '@/components/ui/header'
import { CardAccordion } from '@/components/landing/card-accordion'
import FeatureSection from '@/components/landing/feature-section'
import HeroSection from '@/components/landing/hero-section'
import TeamSection from '@/components/landing/team-section'
import StatsSection from '@/components/landing/stats-section'
import FreeSection from '@/components/landing/free-section'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <Container as='main' size='large'>
      {/* <Header /> */}
      <HeroSection />
      <FreeSection />
      <FeatureSection />
      <TeamSection />
      {/* <StatsSection /> */}
      <CardAccordion />
      <Footer />
    </Container>
  )
}
