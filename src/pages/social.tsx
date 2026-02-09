import WorkPageHero from '../components/workPageHero'
import WorkSection from '../components/workSection'
import WorkCard from '../components/workCard'
import WorkList from '../components/workList'

function SocialMediaPage() {
  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialItems = [
    {
      href: "https://www.instagram.com/obscureballers",
      imageSrc: "/radio/obscure_ballers_logo.webp",
      imageAlt: "Interview with Teresa Limon",
      title: "Obscure Ballers Instagram"
    },
    {
      href: "https://www.instagram.com/reel/DRdkAIwjXZG",
      imageSrc: "/social/chicago_fire.webp",
      imageAlt: "Chicago Fire FC Sector Latino interviews",
      title: "Chicago Fire FC Sector Latino Interviews",
      date: "11/24/25"
    },
    {
      href: "https://www.instagram.com/reel/DPj97HJis6i/",
      imageSrc: "/social/football_field.heic",
      imageAlt: "Interview with Rafael Ponce de Leon",
      title: "Northwestern Latino Alumni Homecoming Tailgate Social Media Package (Spanish)",
      date: "10/8/25"
    }
  ]

  const highlights = [
    {
      title: "Chicago Fire FC Sector Latino Interviews (Bilingual)",
      href: "https://www.instagram.com/reel/DRdkAIwjXZG",
      date: "11/24/25"
    },
    {
      title: "Interview with Rafael Ponce de Leon (Bilingual)",
      href: "https://www.instagram.com/reel/DQf0pRuDKdW",
      date: "10/31/25"
    },
    {
      title: "Interview with Teresa Limon (Spanish)",
      href: "https://www.instagram.com/reel/DP5CQvoDNcc",
      date: "10/16/25"
    },
    {
      title: "Northwestern Latino Alumni Homecoming Tailgate Social Media Package (Spanish)",
      href: "https://www.instagram.com/reel/DPj97HJis6i/",
      date: "10/8/25"
    },
    {
      title: "Men's Soccer: Northwestern vs Rutgers Preview (Spanish)",
      href: "https://www.instagram.com/reel/DOzTr23DCdL",
      date: "9/19/25"
    }
  ]

  return (
    <main className="television-page social-page">
      <WorkPageHero
        category="Social Media"
        title="Social Media"
        description="I edit and create bilingual social media content NNN Sports and News, WNUR Sports, Obscure Ballers and my own accounts. I was also able to cover the Chicago Fire's 2025 MLS playoff run on socials with 98.3FM The Life."
        imageSrc="/social/teresa_limon.webp"
        imageAlt="Chicago Fire FC Sector Latino interviews"
      />

      <WorkSection>
        <div className="television-grid">
          {socialItems.map((item, index) => (
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

export default SocialMediaPage
