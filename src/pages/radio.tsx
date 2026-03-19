import MediaGrid from '../components/mediaGrid'
import WorkPageHero from '../components/workPageHero'
import WorkSection from '../components/workSection'
import WorkCard from '../components/workCard'
import WorkList from '../components/workList'

function RadioPage() {
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
      title: "Obscure Ballers Instagram Account",
    }
  ]

  const highlights = [
    { title: "Men's Basketball: Northwestern at DePaul Broadcast Clip (English)", href: "https://www.instagram.com/reel/DRF9b1zkrDV/", date: "11/14/25" },
    { title: "Women's Soccer: Northwestern vs Illinois Broadcast Clip (English)", href: "https://www.instagram.com/reel/DP6pWjpjVPJ/", date: "10/16/25" },
    { title: "Women's Soccer: Northwestern vs #23 Ohio State Broadcast Clip (Spanish)", href: "https://www.instagram.com/reel/DPE2b0qiQvd/?igsh=MXM2Y3R2ejJzaTNqcg==", date: "9/25/25" },
    { title: "WNUR Sports Call of the Week - Men's Soccer: Northwestern vs Rutgers (Spanish)", href: "https://www.instagram.com/reel/DO487_LjEqe/?igsh=cG80b2E0OWdpMmhq", date: "9/21/25" },
    { title: "Men's Soccer: Northwestern vs Rutgers Broadcast Clip (Spanish)", href: "https://www.instagram.com/reel/DO1mdHqEmmY", date: "9/19/25" }
  ]

  return (
    <main className="section-page">
      <WorkPageHero
        category="Radio"
        title="Radio"
        description="WNUR Sports Managing Editor, live broadcasting Northwestern soccer, basketball, volleyball, lacrosse, football, softball and baseball. Student intern at 98.3FM The Life, covering Lake County high school sports and hosting the college sports segment on Saturday morning."
        imageSrc="/radio/soccer_broadcast.webp"
        imageAlt="Calling a Northwestern soccer match"
      />

      <MediaGrid
        items={[
          { src: '/radio/united_center_court.webp', alt: 'United Center court', subdued: true },
          { src: '/radio/wintrust_arena.webp', alt: 'Wintrust Arena broadcast', subdued: true },
          { src: '/radio/indiana.webp', alt: 'Indiana', subdued: true },
          { src: '/radio/ihsa_state_finals.webp', alt: 'IHSA State Finals', subdued: true },
        ]}
      />

      <WorkSection
        title="Obscure Ballers"
        description="Co-hosted a live WNUR Sports talk show broadcast on radio and YouTube every Sunday for its 14-week run in fall 2025."
      >
        <div className="media-card-grid">
          {obscureBallersItems.map((item, index) => (
            <WorkCard
              key={index}
              href={item.href}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              date={item.date}
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
