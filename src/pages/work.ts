export function createWorkPage(): string {
  return `
    <main>
      <div class="work-container">
        <h1>My Work</h1>
        <nav class="work-nav">
          <a href="#radio">Radio</a>
          <a href="#print">Print</a>
          <a href="#television">Television</a>
          <a href="#social-media">Social Media</a>
          <a href="#documentary">Documentary</a>
        </nav>
        
        <section id="radio" class="work-section">
          <h2>Radio</h2>
          <div class="work-grid">
            <div class="work-item">
              <a href="https://youtube.com/playlist?list=PLgEoIkUdTg4Nq_3iWBsVDVPMxXJ7EbCYv" target="_blank" rel="noopener noreferrer">
                <img src="/radio/obscure_ballers.jpeg" alt="Obscure Ballers Playlist" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://youtube.com/playlist?list=PLgEoIkUdTg4Nq_3iWBsVDVPMxXJ7EbCYv" target="_blank" rel="noopener noreferrer" class="work-link">Obscure Ballers Playlist 9/7/25 - 12/7/25</a>
                <span class="work-date">9/7/25 - 12/7/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DRF9b1zkrDV/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DRF9b1zkrDV/" target="_blank" rel="noopener noreferrer" class="work-link">Men's Basketball: Northwestern at DePaul Broadcast Clip</a>
                <span class="work-date">11/14/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DP6pWjpjVPJ/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DP6pWjpjVPJ/" target="_blank" rel="noopener noreferrer" class="work-link">Women's Soccer: Northwestern vs Illinois Broadcast Clip</a>
                <span class="work-date">10/16/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper">
                <iframe 
                  src="https://www.youtube.com/embed/H_-RM7-dQW0" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.youtube.com/live/H_-RM7-dQW0" target="_blank" rel="noopener noreferrer" class="work-link">Obscure Ballers; Stolen Base Episode</a>
                <span class="work-date">9/28/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DP6pWjpjVPJ/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DP6pWjpjVPJ/" target="_blank" rel="noopener noreferrer" class="work-link">Women's Soccer: Northwestern vs #23 Ohio State Broadcast Clip (Spanish)</a>
                <span class="work-date">9/25/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DO1mdHqEmmY/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DO1mdHqEmmY" target="_blank" rel="noopener noreferrer" class="work-link">Men's Soccer: Northwestern vs Rutgers Broadcast Clip (Spanish)</a>
                <span class="work-date">9/19/25</span>
              </div>
            </div>
          </div>
        </section>
        
        <section id="print" class="work-section">
          <h2>Print</h2>
          <div class="work-grid">
            <div class="work-item">
              <a href="https://illatinonews.com/encendidos-sector-latinos-passion-on-and-off-the-pitch/" target="_blank" rel="noopener noreferrer">
                <img src="/print/encendidos.jpg" alt="Encendidos article" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://illatinonews.com/encendidos-sector-latinos-passion-on-and-off-the-pitch/" target="_blank" rel="noopener noreferrer" class="work-link">Encendidos: Sector Latino's Passion On And Off The Pitch - Illinois Latino News Network</a>
                <span class="work-date">11/21/25</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://www.insidenu.com/2025/6/12/24448134/northwestern-softball-is-finally-getting-a-20-million-stadium-of-its-own-in-2026" target="_blank" rel="noopener noreferrer">
                <img src="/print/swinging.webp" alt="Northwestern softball stadium article" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://www.insidenu.com/2025/6/12/24448134/northwestern-softball-is-finally-getting-a-20-million-stadium-of-its-own-in-2026" target="_blank" rel="noopener noreferrer" class="work-link">Swinging for the Fences: Northwestern softball's new $20 million stadium is designed to bring a championship to Evanston - Inside NU</a>
                <span class="work-date">6/12/25</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://www.chicagolandsoccer.org/news_article/show/1339883" target="_blank" rel="noopener noreferrer">
                <img src="/print/chicagoland.png" alt="New Trier regional title article" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://www.chicagolandsoccer.org/news_article/show/1339883" target="_blank" rel="noopener noreferrer" class="work-link">Game Story: Randall, New Trier power past Addison Trail for Regional Title - Chicagoland Soccer</a>
                <span class="work-date">5/27/25</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://www.chicagolandsoccer.org/news_article/show/1337442" target="_blank" rel="noopener noreferrer">
                <img src="/print/chicagoland.png" alt="Wheaton Cup article" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://www.chicagolandsoccer.org/news_article/show/1337442" target="_blank" rel="noopener noreferrer" class="work-link">Feature story: Wheaton Cup tradition continues to flourish - Chicagoland Soccer</a>
                <span class="work-date">4/24/25</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://evanstonroundtable.com/2024/11/24/in-first-season-nus-temporary-football-stadium-mostly-a-hit/" target="_blank" rel="noopener noreferrer">
                <img src="/print/temporary.webp" alt="NU temporary football stadium article" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://evanstonroundtable.com/2024/11/24/in-first-season-nus-temporary-football-stadium-mostly-a-hit/" target="_blank" rel="noopener noreferrer" class="work-link">In first season, NU's temporary football stadium mostly a big hit - Evanston RoundTable</a>
                <span class="work-date">11/24/24</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://www.chicagolandsoccer.org/news_article/show/1311329-game-story-wheaton-warrenville-south-falls-to-geneva-in-regional-final-shootout" target="_blank" rel="noopener noreferrer">
                <img src="/print/chicagoland.png" alt="Wheaton Warrenville South regional final article" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://www.chicagolandsoccer.org/news_article/show/1311329-game-story-wheaton-warrenville-south-falls-to-geneva-in-regional-final-shootout" target="_blank" rel="noopener noreferrer" class="work-link">Game Story: Wheaton Warrenville South Falls to Geneva in regional final shootout - Chicagoland Soccer</a>
                <span class="work-date">5/17/24</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://www.chicagolandsoccer.org/news_article/show/1310180" target="_blank" rel="noopener noreferrer">
                <img src="/print/chicagoland.png" alt="Wheaton Warrenville South Batavia article" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://www.chicagolandsoccer.org/news_article/show/1310180" target="_blank" rel="noopener noreferrer" class="work-link">Game Story: Wheaton Warrenville South, Batavia reach electric stalemate - Chicagoland Soccer</a>
                <span class="work-date">5/2/24</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://www.chicagolandsoccer.org/news_article/show/1305107" target="_blank" rel="noopener noreferrer">
                <img src="/print/chicagoland.png" alt="WWS 500th win article" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://www.chicagolandsoccer.org/news_article/show/1305107" target="_blank" rel="noopener noreferrer" class="work-link">Game Story: WWS holds off Oswego East, claims program's 500th win - Chicagoland Soccer</a>
                <span class="work-date">3/25/24</span>
              </div>
            </div>
          </div>
        </section>
        
        <section id="television" class="work-section">
          <h2>Television</h2>
          <div class="work-grid">
            <div class="work-item">
              <div class="video-wrapper">
                <iframe 
                  src="https://drive.google.com/file/d/1-OioAaqjvQN9YNYeUVnN3Mvkf5GDo4Vd/preview" 
                  allow="autoplay"
                  allowfullscreen>
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://drive.google.com/file/d/1-OioAaqjvQN9YNYeUVnN3Mvkf5GDo4Vd/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="work-link">"Noticiero Northwestern" Bad Bunny Super Bowl Explainer (Spanish)</a>
                <span class="work-date">2/3/26</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/2017092728224452837?s=20" target="_blank" rel="noopener noreferrer">
                <img src="/television/mbb.png" alt="Men's Basketball Postgame Report" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/2017092728224452837?s=20" target="_blank" rel="noopener noreferrer" class="work-link">Men's Basketball: Northwestern vs Penn State Postgame Standup</a>
                <span class="work-date">1/29/26</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper">
                <iframe 
                  src="https://drive.google.com/file/d/1jejO3DuJPaXHHr3LPD8zmbIsyFxK-rtS/preview" 
                  allow="autoplay"
                  allowfullscreen>
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://drive.google.com/file/d/1jejO3DuJPaXHHr3LPD8zmbIsyFxK-rtS/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="work-link">"Politicat" One Year of Trump Explainer</a>
                <span class="work-date">1/20/26</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/2011620412665541087" target="_blank" rel="noopener noreferrer">
                <img src="/television/mbbil.png" alt="Men's Basketball Northwestern vs Illinois" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/2011620412665541087" target="_blank" rel="noopener noreferrer" class="work-link">Men's Basketball: Northwestern vs #13 Illinois Pregame Standup</a>
                <span class="work-date">1/14/26</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/2007568993284956531" target="_blank" rel="noopener noreferrer">
                <img src="/television/mbbmn.png" alt="Men's Basketball Northwestern vs Minnesota" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/2007568993284956531" target="_blank" rel="noopener noreferrer" class="work-link">Men's Basketball: Northwestern vs Minnesota Pregame Standup</a>
                <span class="work-date">1/3/26</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/1996413955775123614" target="_blank" rel="noopener noreferrer">
                <img src="/television/wbbks.png" alt="Women's Basketball vs Kansas" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/1996413955775123614" target="_blank" rel="noopener noreferrer" class="work-link">Women's Basketball vs Kansas Postgame Standup</a>
                <span class="work-date">12/3/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper">
                <iframe 
                  src="https://www.youtube.com/embed/uJTdrvqxRCE" 
                  title="SportsNight Anchoring" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://youtu.be/uJTdrvqxRCE" target="_blank" rel="noopener noreferrer" class="work-link">"SportsNight" Anchoring</a>
                <span class="work-date">11/13/25</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/1974560702053675038" target="_blank" rel="noopener noreferrer">
                <img src="/television/fbulm.png" alt="Football Northwestern vs ULM" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/1974560702053675038" target="_blank" rel="noopener noreferrer" class="work-link">Football: Northwestern vs ULM Pregame Standup</a>
                <span class="work-date">10/4/25</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/1964111420045287425" target="_blank" rel="noopener noreferrer">
                <img src="/television/fbwiu.png" alt="Football Northwestern vs Western Illinois" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/1964111420045287425" target="_blank" rel="noopener noreferrer" class="work-link">Football: Northwestern vs Western Illinois Pregame Standup</a>
                <span class="work-date">9/5/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper">
                <iframe 
                  src="https://www.instagram.com/reel/DO95Us8DKlj/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DO95Us8DKlj" target="_blank" rel="noopener noreferrer" class="work-link">Appearance on ESPN's "Ahora o Nunca" (Spanish)</a>
                <span class="work-date">7/10/25</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/1920983647101837351" target="_blank" rel="noopener noreferrer">
                <img src="/television/wrigleybaseball.png" alt="Baseball at Wrigley Field Northwestern vs Ohio State" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/1920983647101837351" target="_blank" rel="noopener noreferrer" class="work-link">Baseball at Wrigley Field: Northwestern vs Ohio State Pregame Standup</a>
                <span class="work-date">5/9/25</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/1888683929387102461" target="_blank" rel="noopener noreferrer">
                <img src="/television/wbbpennst.png" alt="Women's Basketball Northwestern vs Penn State" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/1888683929387102461" target="_blank" rel="noopener noreferrer" class="work-link">Women's Basketball: Northwestern vs Penn State Halftime Standup</a>
                <span class="work-date">2/9/25</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/1880385871381402044" target="_blank" rel="noopener noreferrer">
                <img src="/television/mbbmaryland.png" alt="Men's Basketball Northwestern vs Maryland" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/1880385871381402044" target="_blank" rel="noopener noreferrer" class="work-link">Men's Basketball: Northwestern vs Maryland Postgame Standup</a>
                <span class="work-date">1/16/25</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/1860402788083114320" target="_blank" rel="noopener noreferrer">
                <img src="/television/wbbharvard.png" alt="Women's Basketball Northwestern vs Harvard" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/1860402788083114320" target="_blank" rel="noopener noreferrer" class="work-link">Women's Basketball: Northwestern vs Harvard Halftime Standup</a>
                <span class="work-date">11/23/24</span>
              </div>
            </div>
            <div class="work-item">
              <a href="https://x.com/NNNSports/status/1857587132593844234" target="_blank" rel="noopener noreferrer">
                <img src="/television/mbbeiu.png" alt="Men's Basketball Northwestern vs Eastern Illinois" class="work-image">
              </a>
              <div class="work-info">
                <a href="https://x.com/NNNSports/status/1857587132593844234" target="_blank" rel="noopener noreferrer" class="work-link">Men's Basketball: Northwestern vs Eastern Illinois Pregame Standup</a>
                <span class="work-date">11/15/24</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper">
                <iframe 
                  src="https://www.youtube.com/embed/323xQc-qSJU" 
                  title="Wildcat Gameday Preview Anchoring" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://youtu.be/323xQc-qSJU" target="_blank" rel="noopener noreferrer" class="work-link">"Wildcat Gameday Preview" Anchoring</a>
                <span class="work-date">10/11/24</span>
              </div>
            </div>
          </div>
        </section>
        
        <section id="social-media" class="work-section">
          <h2>Social Media</h2>
          <div class="work-grid">
            <div class="work-item">
              <div class="video-wrapper">
                <iframe 
                  src="https://www.instagram.com/reel/DRdkAIwjXZG/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DRdkAIwjXZG" target="_blank" rel="noopener noreferrer" class="work-link">Chicago Fire FC Sector Latino Interviews</a>
                <span class="work-date">11/24/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DQf0pRuDKdW/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DQf0pRuDKdW" target="_blank" rel="noopener noreferrer" class="work-link">Interview with Rafael Ponce de Leon (Bilingual)</a>
                <span class="work-date">10/31/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DP5CQvoDNcc/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DP5CQvoDNcc" target="_blank" rel="noopener noreferrer" class="work-link">Interview with Teresa Limon (Spanish)</a>
                <span class="work-date">10/16/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DPj97HJis6i/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DPj97HJis6i/" target="_blank" rel="noopener noreferrer" class="work-link">Northwestern Latino Alumni Homecoming Tailgate Social Media Package (Spanish)</a>
                <span class="work-date">10/8/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DOzTr23DCdL/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DOzTr23DCdL" target="_blank" rel="noopener noreferrer" class="work-link">Men's Soccer: Northwestern vs Rutgers Preview (Spanish)</a>
                <span class="work-date">9/19/25</span>
              </div>
            </div>
          </div>
        </section>
        
        <section id="documentary" class="work-section">
          <h2>Documentary</h2>
          <div class="work-grid">
            <div class="work-item">
              <div class="video-wrapper">
                <iframe 
                  src="https://drive.google.com/file/d/1C73yh56cpyNcX1QjrYyW7RgKnwFFi9SE/preview" 
                  allow="autoplay"
                  allowfullscreen>
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://drive.google.com/file/d/1C73yh56cpyNcX1QjrYyW7RgKnwFFi9SE/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="work-link">Keenan Fitzmorris in Peru Package (Spanish)</a>
                <span class="work-date">2/3/26</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DSOU9GkDE2p/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DSOU9GkDE2p" target="_blank" rel="noopener noreferrer" class="work-link">La Liga de Basket de Lima Finals Game 2 Pregame Standup</a>
                <span class="work-date">12/13/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DSLr_2GErFi/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DSLr_2GErFi" target="_blank" rel="noopener noreferrer" class="work-link">Interview with Chiki Villalobos (Spanish)</a>
                <span class="work-date">12/12/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DSDl-T0kfC2/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DSDl-T0kfC2" target="_blank" rel="noopener noreferrer" class="work-link">La Liga de Basket de Lima Finals Game 1 Preview (English)</a>
                <span class="work-date">12/9/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DSDhqv-EpGj/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DSDhqv-EpGj" target="_blank" rel="noopener noreferrer" class="work-link">La Liga de Basket de Lima Finals Game 1 Preview (Spanish)</a>
                <span class="work-date">12/9/25</span>
              </div>
            </div>
            <div class="work-item">
              <div class="video-wrapper instagram">
                <iframe 
                  src="https://www.instagram.com/reel/DR8VYjkDN-D/embed" 
                  width="400"
                  height="710"
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true">
                </iframe>
              </div>
              <div class="work-info">
                <a href="https://www.instagram.com/reel/DR8VYjkDN-D" target="_blank" rel="noopener noreferrer" class="work-link">La Liga de Basket de Lima Semifinals Pregame Standup (Spanish)</a>
                <span class="work-date">12/6/25</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  `
}
