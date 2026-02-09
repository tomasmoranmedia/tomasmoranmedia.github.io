import MediaGrid from '../components/mediaGrid'
import WorkPageHero from '../components/workPageHero'
import WorkSection from '../components/workSection'
import WorkList from '../components/workList'

function DocumentaryPage() {
  const coverage = [
    {
      title: "\"Noticiero Northwestern\" Keenan Fitzmorris in Peru Package (Spanish)",
      href: "https://drive.google.com/file/d/1C73yh56cpyNcX1QjrYyW7RgKnwFFi9SE/view?usp=sharing",
      date: "2/3/26"
    },
    {
      title: "La Liga de Basket de Lima Finals Game 2 Pregame Standup (English)",
      href: "https://www.instagram.com/reel/DSOU9GkDE2p",
      date: "12/13/25"
    },
    {
      title: "Interview with Chiki Villalobos (Spanish)",
      href: "https://www.instagram.com/reel/DSLr_2GErFi",
      date: "12/12/25"
    },
    {
      title: "La Liga de Basket de Lima Finals Game 1 Preview (English)",
      href: "https://www.instagram.com/reel/DSDl-T0kfC2",
      date: "12/9/25"
    },
    {
      title: "La Liga de Basket de Lima Finals Game 1 Preview (Spanish)",
      href: "https://www.instagram.com/reel/DSDhqv-EpGj",
      date: "12/9/25"
    },
    {
      title: "La Liga de Basket de Lima Semifinals Pregame Standup (Spanish)",
      href: "https://www.instagram.com/reel/DR8VYjkDN-D",
      date: "12/6/25"
    }
  ]

  return (
    <main className="television-page documentary-page">
      <WorkPageHero
        category="Documentary"
        title="Documentary"
        description="How does basketball survive in the only country that lacks a national team due to governmental instability? I'm currently producing a bilingual basketball documentary about the state of Peruvian basketball and former Northwestern player Keenan Fitzmorris' experience playing in Lima. Having wrapped filming in December, it's set to be published by WNUR Sports this spring!"
        imageSrc="/documentary/camera.webp"
        imageAlt="Holding a camera while filming in Lima"
      />

      <WorkSection>
        <MediaGrid
          items={[
            {
              title: 'Coliseo Dibós',
              subtitle: 'Lima arena exterior',
              src: '/documentary/coliseo-outside.webp',
              alt: 'Documentary: Coliseo Dibós exterior',
              subdued: true,
            },
            {
              title: 'Filming on the beach',
              subtitle: 'Costa Verde sunrise setup',
              src: '/documentary/beach.webp',
              alt: 'Filming on the beach in Lima',
              subdued: true,
            },
            {
              title: 'Filming seagulls',
              subtitle: 'Ambient B-roll capture',
              src: '/documentary/seagulls.mp4',
              alt: 'Filming seagulls',
              type: 'video',
            },
            {
              title: 'Interviewing at Coliseo Dibós',
              subtitle: 'Player sit-down',
              src: '/documentary/coliseo_dibos.webp',
              alt: 'Interviewing at Coliseo Dibós',
              subdued: true,
            },
          ]}
        />
      </WorkSection>

      <WorkSection title="Coverage in Peru">
        <WorkList items={coverage} />
      </WorkSection>
    </main>
  )
}

export default DocumentaryPage
