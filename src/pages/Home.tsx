import Hero from '../components/Hero'
import About from '../components/About'
import Highlights from '../components/Highlights'
import EligibilityChecker from '../components/EligibilityChecker'
import CurriculumExplorer from '../components/CurriculumExplorer'
import CapstoneShowcase from '../components/CapstoneShowcase'
import ScheduleModality from '../components/ScheduleModality'
import InvestmentCalculator from '../components/InvestmentCalculator'
import Graduate from '../components/Graduate'
import Research from '../components/Research'
import Admission from '../components/Admission'
import FAQ from '../components/FAQ'
import Apply from '../components/Apply'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Highlights />
      <EligibilityChecker />
      <CurriculumExplorer />
      <CapstoneShowcase />
      <ScheduleModality />
      <InvestmentCalculator />
      <Graduate />
      <Research />
      <Admission />
      <FAQ />
      <Apply />
    </>
  )
}
