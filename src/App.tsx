import { ThemeProvider } from './components/ui/theme-provider.tsx'
import Nav from './components/Nav.tsx'
import About from './components/About.tsx'
import Stack from './components/Stack.tsx'
import Projects from './components/Projects.tsx'
import Connect from './components/Connect.tsx'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='flex flex-col gap-[4vw] md:gap-[12vw] lg:gap-0'>
        <Nav/>
        <About/>
        <Stack/>
        <Projects/>
        <Connect/>
      </div>
    </ThemeProvider>
  )
}

export default App
