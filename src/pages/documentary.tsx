import MediaGrid from '../components/mediaGrid'
import WorkPageHero from '../components/workPageHero'
import WorkSection from '../components/workSection'
import WorkList from '../components/workList'

function DocumentaryPage() {
  const coverage = [
    { title: "La Liga de Basket de Lima Finals Game 2 Preview (English)", href: "https://www.instagram.com/reel/DSOU9GkDE2p", date: "12/13/25" },
    { title: "Dinosaurios Guard Chiki Villalobos Interview (Spanish)", href: "https://www.instagram.com/reel/DSLr_2GErFi", date: "12/12/25" },
    { title: "La Liga de Basket de Lima Finals Game 1 Preview (English)", href: "https://www.instagram.com/reel/DSDl-T0kfC2", date: "12/9/25" },
    { title: "La Liga de Basket de Lima Finals Game 1 Preview (Spanish)", href: "https://www.instagram.com/reel/DSDhqv-EpGj", date: "12/9/25" },
    { title: "La Liga de Basket de Lima Semifinals Preview (Spanish)", href: "https://www.instagram.com/reel/DR8VYjkDN-D", date: "12/6/25" }
  ]

  return (
    <main className="section-page">
      <WorkPageHero
        category="Documentary"
        title="Documentary"
        description="How does basketball survive in the only country without a national team due to governmental instability? A bilingual documentary about the state of Peruvian basketball and former Northwestern player Keenan Fitzmorris' experience playing in Lima. Set to be published by WNUR Sports this spring."
        imageSrc="/documentary/camera.webp"
        imageAlt="Holding a camera while filming in Lima"
      />

      <WorkSection>
        <MediaGrid
          items={[
            { src: '/documentary/coliseo-outside.webp', alt: 'Coliseo Dibos exterior', subdued: true },
            { src: '/documentary/beach.webp', alt: 'Filming on the beach in Lima', subdued: true },
            { src: '/documentary/seagulls.mp4', alt: 'Filming seagulls', type: 'video' },
            { src: '/documentary/coliseo_dibos.webp', alt: 'Interviewing at Coliseo Dibos', subdued: true },
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
