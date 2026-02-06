import MediaGrid from "../components/mediaGrid"

function PrintPage() {
  return (
    <main className="television-page print-page">
      <div className="television-hero">
        <div className="television-hero-media">
          <img src="/print/2023-finals.webp" alt="Watching a soccer game in the booth" />
        </div>
        <div className="television-hero-copy">
          <p className="television-kicker">My Work · Print</p>
          <h1>Print</h1>
          <p className="television-lead">My written work has been published by the Illinois Latino News Network, Evanston RoundTable, Inside NU and Chicagoland Soccer.</p>
        </div>
      </div>

      <section className="television-section">
        <MediaGrid
          items={[
            { src: '/print/2024-finals.webp', alt: '2024 state finals', subdued: true },
            { src: '/print/dave.webp', alt: 'Dave', subdued: true },]}
        />
      </section>

      <section className="television-section">
        <div className="television-section-head">
          <h2>Selected articles</h2>
        </div>
        <div className="television-list">
          <ul>
            <li><a href="https://illatinonews.com/encendidos-sector-latinos-passion-on-and-off-the-pitch/" target="_blank" rel="noopener noreferrer">Encendidos: Sector Latino’s Passion On And Off The Pitch - Illinois Latino News Network</a> <span className="television-date">11/21/25</span></li>
            <li><a href="https://www.insidenu.com/2025/6/12/24448134/northwestern-softball-is-finally-getting-a-20-million-stadium-of-its-own-in-2026" target="_blank" rel="noopener noreferrer">Swinging for the Fences: Northwestern softball’s new $20 million stadium is designed to bring a championship to Evanston - Inside NU</a> <span className="television-date">6/12/25</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1339883" target="_blank" rel="noopener noreferrer">Game story: Randall, New Trier power past Addison Trail for Regional Title - Chicagoland Soccer</a> <span className="television-date">5/27/25</span></li>
            <li><a href="https://evanstonroundtable.com/2025/05/10/community-mulls-chandler-newberger-tot-lot-renovation/" target="_blank" rel="noopener noreferrer">Community mulls Chandler-Newberger Tot Lot renovation - Evanston RoundTable</a> <span className="television-date">5/10/25</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1337442" target="_blank" rel="noopener noreferrer">Feature story: Wheaton Cup tradition continues to flourish - Chicagoland Soccer</a> <span className="television-date">4/24/25</span></li>
            <li><a href="https://evanstonroundtable.com/2025/03/17/from-the-allen-center-to-the-lakefill-bridge-nus-campus-is-getting-a-facelift/" target="_blank" rel="noopener noreferrer">From the Allen Center to the lakefill bridge, NU's campus is getting a facelift - Evanston RoundTable</a> <span className="television-date">3/17/25</span></li>
            <li><a href="https://evanstonroundtable.com/2024/11/24/in-first-season-nus-temporary-football-stadium-mostly-a-hit/" target="_blank" rel="noopener noreferrer">In first season, NU's temporary football stadium mostly a big hit - Evanston RoundTable</a> <span className="television-date">11/24/24</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1311329" target="_blank" rel="noopener noreferrer">Game story: Wheaton Warrenville South Falls to Geneva in regional final shootout - Chicagoland Soccer</a> <span className="television-date">5/17/24</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1309834" target="_blank" rel="noopener noreferrer">Game story: Wheaton Warrenville South, St. Charles East duel to unevenly even draw - Chicagoland Soccer</a> <span className="television-date">5/9/24</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1310180" target="_blank" rel="noopener noreferrer">Game story: Wheaton Warrenville South, Batavia reach electric stalemate - Chicagoland Soccer</a> <span className="television-date">5/2/24</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1306866" target="_blank" rel="noopener noreferrer">Game story: Wheaton Warrenville South bounces back at Minooka - Chicagoland Soccer</a> <span className="television-date">4/15/24</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1305107" target="_blank" rel="noopener noreferrer">Game story: WWS holds off Oswego East, claims program’s 500th win - Chicagoland Soccer</a> <span className="television-date">3/25/24</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1274088" target="_blank" rel="noopener noreferrer">Season recap: Wheaton Warrenville South - Chicagoland Soccer</a> <span className="television-date">11/14/23</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1272569" target="_blank" rel="noopener noreferrer">Feature story: Wheaton Warrenville South finds soccer sanctuary in Tiger Den - Chicagoland Soccer</a> <span className="television-date">11/1/23</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1265033" target="_blank" rel="noopener noreferrer">Game story: WWS tops Wheaton North emphatically to retain Wheaton Cup - Chicagoland Soccer</a> <span className="television-date">9/23/23</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1262630" target="_blank" rel="noopener noreferrer">Season outlook: Wheaton Warrenville South - Chicagoland Soccer</a> <span className="television-date">9/5/23</span></li>
            <li><a href="https://www.chicagolandsoccer.org/news_article/show/1244997" target="_blank" rel="noopener noreferrer">Feature story: Wheaton Warrenville South looks forward to success- Chicagoland Soccer</a> <span className="television-date">4/13/23</span></li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default PrintPage
