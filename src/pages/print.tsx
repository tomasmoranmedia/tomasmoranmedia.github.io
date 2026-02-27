import MediaGrid from "../components/mediaGrid"
import WorkPageHero from '../components/workPageHero'
import WorkSection from '../components/workSection'
import WorkList from '../components/workList'

function PrintPage() {
  const articles = [
    {
      title: "Encendidos: Sector Latino's Passion On And Off The Pitch - Illinois Latino News Network",
      href: "https://illatinonews.com/encendidos-sector-latinos-passion-on-and-off-the-pitch/",
      date: "11/21/25"
    },
    {
      title: "Swinging for the Fences: Northwestern softball's new $20 million stadium is designed to bring a championship to Evanston - Inside NU",
      href: "https://www.insidenu.com/2025/6/12/24448134/northwestern-softball-is-finally-getting-a-20-million-stadium-of-its-own-in-2026",
      date: "6/12/25"
    },
    {
      title: "Game story: Randall, New Trier power past Addison Trail for Regional Title - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1339883",
      date: "5/27/25"
    },
    {
      title: "Community mulls Chandler-Newberger Tot Lot renovation - Evanston RoundTable",
      href: "https://evanstonroundtable.com/2025/05/10/community-mulls-chandler-newberger-tot-lot-renovation/",
      date: "5/10/25"
    },
    {
      title: "Feature story: Wheaton Cup tradition continues to flourish - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1337442",
      date: "4/24/25"
    },
    {
      title: "From the Allen Center to the lakefill bridge, NU's campus is getting a facelift - Evanston RoundTable",
      href: "https://evanstonroundtable.com/2025/03/17/from-the-allen-center-to-the-lakefill-bridge-nus-campus-is-getting-a-facelift/",
      date: "3/17/25"
    },
    {
      title: "In first season, NU's temporary football stadium mostly a big hit - Evanston RoundTable",
      href: "https://evanstonroundtable.com/2024/11/24/in-first-season-nus-temporary-football-stadium-mostly-a-big-hit/",
      date: "11/24/24"
    },
    {
      title: "Game story: Wheaton Warrenville South Falls to Geneva in regional final shootout - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1311329",
      date: "5/17/24"
    },
    {
      title: "Game story: Wheaton Warrenville South, St. Charles East duel to unevenly even draw - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1310180",
      date: "5/9/24"
    },
    {
      title: "Game story: Wheaton Warrenville South bounces back at Minooka - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1306866",
      date: "4/15/24"
    },
    {
      title: "Game story: WWS holds off Oswego East, claims program's 500th win - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1305107",
      date: "3/25/24"
    },
    {
      title: "Season recap: Wheaton Warrenville South - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1274088",
      date: "11/14/23"
    },
    {
      title: "Feature story: Wheaton Warrenville South finds soccer sanctuary in Tiger Den - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1272569",
      date: "11/1/23"
    },
    {
      title: "Game story: WWS tops Wheaton North emphatically to retain Wheaton Cup - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1265033",
      date: "9/23/23"
    },
    {
      title: "Season outlook: Wheaton Warrenville South - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1262630",
      date: "9/5/23"
    },
    {
      title: "Feature story: Wheaton Warrenville South looks forward to success - Chicagoland Soccer",
      href: "https://www.chicagolandsoccer.org/news_article/show/1244997",
      date: "4/13/23"
    }
  ]

  return (
    <main className="television-page print-page">
      <WorkPageHero
        category="Print"
        title="Print"
        description="My written work has been published by the Illinois Latino News Network, Evanston RoundTable, Inside NU and Chicagoland Soccer."
        imageSrc="/print/2023-finals.webp"
        imageAlt="Watching a soccer game in the booth"
      />

      <WorkSection>
        <MediaGrid
          items={[
            { src: '/social/chicago_fire.webp', alt: 'Chicago Fire FC Sector Latino interview', subdued: true },
            { src: '/print/dave.webp', alt: 'Dave', subdued: true },
          ]}
        />
      </WorkSection>

      <WorkSection title="Articles">
        <WorkList items={articles} />
      </WorkSection>
    </main>
  )
}

export default PrintPage
