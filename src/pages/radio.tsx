import MediaGrid from '../components/mediaGrid'
import WorkPageHero from '../components/workPageHero'
import WorkSection from '../components/workSection'
import WorkCard from '../components/workCard'
import WorkList from '../components/workList'

function RadioPage() {
  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const obscureBallersItems = [
    {
      href: "https://youtube.com/playlist?list=PLgEoIkUdTg4Nq_3iWBsVDVPMxXJ7EbCYv",
      imageSrc: "/radio/obscure_ballers_logo.webp",
      imageAlt: "Obscure Ballers logo",
      title: "Obscure Ballers Episodes Playlist",
      date: "9/7/25 - 12/7/25"
    },
    {
      href: "https://www.youtube.com/live/H_-RM7-dQW0",
      imageSrc: "/radio/obscure_ballers_setup.webp",
      imageAlt: "Obscure Ballers live show setup",
      title: "Obscure Ballers: Stolen Base Episode",
      date: "9/28/25"
    },
    {
      href: "https://www.instagram.com/obscureballers",
      imageSrc: "/radio/obscure_ballers_logo.webp",
      imageAlt: "Obscure Ballers logo",
      title: "Obscure Ballers Instagram",
      date: "TBD"
    }
  ]

  const highlights = [
    {
      title: "Men's Basketball: Northwestern at DePaul Broadcast Clip",
      href: "https://www.instagram.com/reel/DRF9b1zkrDV/",
      date: "11/14/25"
    },
    {
      title: "Women's Soccer: Northwestern vs Illinois Broadcast Clip",
      href: "https://www.instagram.com/reel/DP6pWjpjVPJ/",
      date: "10/16/25"
    },
    {
      title: "Women's Soccer: Northwestern vs #23 Ohio State Broadcast Clip (Spanish)",
      href: "https://www.instagram.com/reel/DP6pWjpjVPJ/",
      date: "9/25/25"
    },
    {
      title: "Men's Soccer: Northwestern vs Rutgers Broadcast Clip (Spanish)",
      href: "https://www.instagram.com/reel/DO1mdHqEmmY",
      date: "9/19/25"
    }
  ]

  return (
    <main className="television-page radio-page">
      <WorkPageHero
        category="Radio"
        title="Radio"
        description={"As managing editor at WNUR Sports, I have the opportunity of live broadcasting Northwestern men's and women's soccer, men's and women's basketball, women's volleyball, women's lacrosse, football, softball and baseball. As a student intern at 98.3FM The Life, I connect with the Lake County community through high school football and basketball broadcasts and hosting the weekly \"Swamp Ratt\" college sports segment."}
        imageSrc="/radio/soccer_broadcast.webp"
        imageAlt="Calling a Northwestern soccer match"
      />

      <MediaGrid
        items={[
          { src: '/radio/wbb_broadcast.webp', alt: 'Radio: WBB broadcast', subdued: true },
          { src: '/radio/united_center_court.webp', alt: 'Radio: United Center court', subdued: true },
          { src: '/radio/ihsa_state_finals.webp', alt: 'Radio: IHSA State Finals', subdued: true },
          { src: '/radio/indiana.webp', alt: 'Radio: Indiana', subdued: true },
        ]}
      />

      <WorkSection 
        title="Obscure Ballers"
        description="I co-hosted Obscure Ballers, a live WNUR Sports talk show broadcast on radio and YouTube every Sunday for its 14-week run in the fall of 2025. Here are the episodes and social media for the program!"
      >
        <div className="television-grid">
          {obscureBallersItems.map((item, index) => (
            <WorkCard
              key={index}
              href={item.href}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              date={item.date}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </WorkSection>

      <WorkSection title="Highlights">
        <WorkList items={highlights} />
      </WorkSection>
    </main>
  )
}

export default RadioPage
