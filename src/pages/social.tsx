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
      href: "https://www.instagram.com/tomasmoranmedia?igsh=MW41aG1wajBkcXRhcw==",
      imageSrc: "/home/headshot.webp",
      imageAlt: "Interview with Teresa Limon",
      title: "My Instagram Account @tomasmoranmedia"
    },
    {
      href: "https://www.instagram.com/reel/DWAVgujisLC/?igsh=Zm1yaXdybzcwbG9p",
      imageSrc: "/social/lima_cerro.heic",
      imageAlt: "Chicago Fire FC Sector Latino interviews",
      title: "NNN News Northwestern Students Vote in Primaries Social Media Package (English)",
      date: "3/17/26"
    },
    {
      href: "https://www.instagram.com/reel/DVR2kC5kSmJ/?igsh=MTRwa3BxNHB0aGI5eQ==",
      imageSrc: "/social/lima_cerro.heic",
      imageAlt: "Chicago Fire FC Sector Latino interviews",
      title: "WNUR Sports Peru Road Trip Reel (English)",
      date: "2/27/26"
    },
    {
      href: "https://www.instagram.com/reel/DRdkAIwjXZG",
      imageSrc: "/social/encendidos.jpg",
      imageAlt: "Chicago Fire FC Sector Latino interviews",
      title: "Chicago Fire FC Sector Latino Interviews (Bilingual)",
      date: "11/24/25"
    },
    {
      href: "https://www.instagram.com/reel/DPj97HJis6i/",
      imageSrc: "/social/football_field.heic",
      imageAlt: "Interview with Rafael Ponce de Leon",
      title: "NNN News Latino Alumni Homecoming Tailgate Social Media Package (Spanish)",
      date: "10/8/25"
    }
  ]

  const highlights = [
    {
      title: "NNN Sports Northwestern Lacrosse Number-One Seed Reel (Spanish)",
      href: "https://www.instagram.com/reel/DX92ByHJ8iz/?igsh=MW1wMHhzNTE0b3RxaA==",
      date: "5/5/26"
    },
    {
      title: "Micaela Rivera Profile (Spanish)",
      href: "https://www.instagram.com/reel/DXxr6zmMLoJ/?igsh=ejJxbXkzbGN6NWdy",
      date: "4/30/26"
    },
    {
      title: "Bronzeville Exploration Reel (English)",
      href: "https://www.instagram.com/reel/DVZzTgBjD_E/?igsh=OG4ycDVucmRjMnZp",
      date: "3/2/26"
    },
    {
      title: "NNN News Chicago Stars in Evanston Social Media Package (Spanish)",
      href: "https://www.instagram.com/reel/DVPIj-mDnl1/?igsh=MTZjYTNybDkzcDhteQ%3D%3D",
      date: "2/26/26"
    },
    {
      title: "NNN News Chicago Stars in Evanston Social Media Package (English)",
      href: "https://www.instagram.com/reel/DU14EcRCtWb/?igsh=amhobTFnOXRtazEz",
      date: "2/16/26"
    },
    {
      title: "Northwestern Goalkeeper Rafael Ponce de Leon Interview (Bilingual)",
      href: "https://www.instagram.com/reel/DQf0pRuDKdW",
      date: "10/31/25"
    },
    {
      title: "Chicago Fire Color Commentator Teresa Limon Interview (Spanish)",
      href: "https://www.instagram.com/reel/DP5CQvoDNcc",
      date: "10/16/25"
    },
    {
      title: "Obscure Ballers Peru 1975 Copa America Final Reel Part 2 (English)",
      href: "https://www.instagram.com/reel/DO9AZjEEZYT/?igsh=MXVkbmU1cnZyeTZuZQ%3D%3D",
      date: "9/23/25"
    },
    {
      title: "Obscure Ballers Peru 1975 Copa America Final Reel Part 1 (English)",
      href: "https://www.instagram.com/reel/DO8_yKeEdT6/?igsh=dHA5cjlvOGpjNTV2",
      date: "9/23/25"
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
        description="I edit and create bilingual social media content for NNN Sports and News, WNUR Sports, Obscure Ballers and my own accounts. Currently, I'm serving as NNN Sports' Social Media Director. I also covered the Chicago Fire's 2025 MLS playoff run on socials with 98.3FM The Life!"
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
