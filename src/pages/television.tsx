import MediaGrid from '../components/mediaGrid'
import WorkPageHero from '../components/workPageHero'
import WorkSection from '../components/workSection'
import WorkCard from '../components/workCard'
import WorkList from '../components/workList'

function TelevisionPage() {
  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const studioItems = [
    {
      href: "https://youtu.be/p061VAFzIbI?si=PwNYItcGKcI255-b",
      imageSrc: "/television/sportsnight 3.png",
      imageAlt: "Lima Costa Verde",
      title: "\"SportsNight\" Anchoring (English)",
      date: "5/21/26"
    },
    {
      href: "https://www.instagram.com/reel/DYpuFjzJr20/?igsh=MXVjMHZjeGdwam5pYw==",
      imageSrc: "/television/ballet folklorico.png",
      imageAlt: "Lima Costa Verde",
      title: "\"Noticiero Northwestern\" Ballet Folklórico Package (Spanish)",
      date: "5/19/26"
    },
    {
      href: "https://https://www.instagram.com/reel/DYVfw02u3kl/?igsh=emQ5aTZlZml3MmYz",
      imageSrc: "/television/chicaskis 2.png",
      imageAlt: "Lima Costa Verde",
      title: "\"Noticiero Northwestern\" Chicago Peruvian Run Club Package (Spanish)",
      date: "5/12/26"
    },
    {
      href: "https://www.instagram.com/reel/DX2wpOBDO_r/?igsh=cnJtbWcxMHFwZGFj",
      imageSrc: "/television/earth day 2.png",
      imageAlt: "Lima Costa Verde",
      title: "\"Northwestern News Report\" Evanston Celebrates Earth Day Package (English)",
      date: "4/28/26"
    },
    {
      href: "https://youtu.be/ZIIMmrP75Xs?si=9QUxi7WtwKGWCbfQ",
      imageSrc: "/television/nnx.png",
      imageAlt: "Lima Costa Verde",
      title: "\"NNX\" Anchoring (English)",
      date: "4/28/26"
    },
    {
      href: "https://youtu.be/1h0i6PpE4gM?si=xlZVMJqEs4Zn7DEn",
      imageSrc: "/television/Television_ Noticiero 3.PNG",
      imageAlt: "Lima Costa Verde",
      title: "\"Noticiero Northwestern\" Anchoring (Spanish)",
      date: "4/14/26"
    },
    {
      href: "https://youtu.be/nBXjpn6dn7M?si=JIoIHfTP8WaHkeEC",
      imageSrc: "/television/Television_ Noticiero 2.JPG",
      imageAlt: "Lima Costa Verde",
      title: "\"Noticiero Northwestern\" Anchoring (Spanish)",
      date: "4/7/26"
    },
    {
      href: "https://youtu.be/XjcVv2HnGms?si=wKuWv9zX9wQYA3Sj",
      imageSrc: "/television/sportsnight 2.heic",
      imageAlt: "Lima Costa Verde",
      title: "\"SportsNight\" Anchoring (English)",
      date: "3/12/26"
    },
    {
      href: "https://www.instagram.com/reel/DVcC433iaJK/?igsh=MTgzeDY2cG1mOHN3Yw==",
      imageSrc: "/television/costa_verde_road.heic",
      imageAlt: "Lima Costa Verde",
      title: "\"SportsNight\" Keenan Fitzmorris in Peru Package (English)",
      date: "2/26/26"
    },
    {
      href: "https://drive.google.com/file/d/1C73yh56cpyNcX1QjrYyW7RgKnwFFi9SE/view",
      imageSrc: "/television/costa verde.heic",
      imageAlt: "Lima Costa Verde",
      title: "\"Noticiero Northwestern\" Keenan Fitzmorris in Peru Package (Spanish)",
      date: "2/3/26"
    },
    {
      href: "https://drive.google.com/file/d/1-OioAaqjvQN9YNYeUVnN3Mvkf5GDo4Vd/view?usp=sharing",
      imageSrc: "/television/noticiero_northwestern.webp",
      imageAlt: "Noticiero Northwestern set",
      title: "\"Noticiero Northwestern\" Bad Bunny Super Bowl Explainer (Spanish)",
      date: "2/3/26"
    },
    {
      href: "https://www.instagram.com/reel/DT4BIp2jv-v/?igsh=MTQxcW9qZ2k1bXd3Yg==",
      imageSrc: "/television/politicat_on-desk.webp",
      imageAlt: "Politicat on-desk",
      title: "\"Politicat\" One Year of Trump Explainer (English)",
      date: "1/20/26"
    },
    {
      href: "https://youtu.be/uJTdrvqxRCE",
      imageSrc: "/television/sportsnight_on-desk.webp",
      imageAlt: "SportsNight anchoring",
      title: "\"SportsNight\" Anchoring (English)",
      date: "11/13/25"
    },
    {
      href: "https://www.instagram.com/reel/DO95Us8DKlj",
      imageSrc: "/television/espn_ahora_o_nunca_new.jpg",
      imageAlt: "Appearance on ESPN Ahora o Nunca",
      title: "Appearance on ESPN's \"Ahora o Nunca\" (Spanish)",
      date: "7/10/25"
    },
    {
      href: "https://www.instagram.com/reel/DGrGNa-qh3O/?igsh=ZjN0a25tYWZtbjQ=",
      imageSrc: "/television/wrestling.png",
      imageAlt: "Wildcat Gameday Preview desk",
      title: "\"SportsNight\" Wrestling Senior Night Package (English)",
      date: "2/27/25"
    },
    {
      href: "https://youtu.be/323xQc-qSJU",
      imageSrc: "/television/wildcat_gameday_preview_on-desk.webp",
      imageAlt: "Wildcat Gameday Preview desk",
      title: "\"Wildcat Gameday Preview\" Anchoring (English)",
      date: "10/11/24"
    }
  ]
const Sideline = [
    {
      title: "Men's Basketball: Northwestern vs Penn State Postgame Standup",
      href: "https://x.com/NNNSports/status/2017092728224452837?s=20",
      date: "1/29/26"
    },
    {
      title: "Men's Basketball: Northwestern vs #13 Illinois Pregame Standup",
      href: "https://x.com/NNNSports/status/2011620412665541087",
      date: "1/14/26"
    },
    {
      title: "Men's Basketball: Northwestern vs Minnesota Pregame Standup",
      href: "https://x.com/NNNSports/status/2007568993284956531",
      date: "1/3/26"
    },
    {
      title: "Women's Basketball vs Kansas Postgame Standup",
      href: "https://x.com/NNNSports/status/1996413955775123614",
      date: "12/3/25"
    },
    {
      title: "Football: Northwestern vs ULM Pregame Standup",
      href: "https://x.com/NNNSports/status/1974560702053675038",
      date: "10/4/25"
    },
    {
      title: "Football: Northwestern vs Western Illinois Pregame Standup",
      href: "https://x.com/NNNSports/status/1964111420045287425",
      date: "9/5/25"
    },
    {
      title: "Baseball at Wrigley Field: Northwestern vs Ohio State Pregame Standup",
      href: "https://x.com/NNNSports/status/1920983647101837351",
      date: "5/9/25"
    },
    {
      title: "Women's Basketball: Northwestern vs Penn State Halftime Standup",
      href: "https://x.com/NNNSports/status/1888683929387102461",
      date: "2/9/25"
    },
    {
      title: "Men's Basketball: Northwestern vs Maryland Postgame Standup",
      href: "https://x.com/NNNSports/status/1880385871381402044",
      date: "1/16/25"
    },
    {
      title: "Women's Basketball: Northwestern vs Harvard Halftime Standup",
      href: "https://x.com/NNNSports/status/1860402788083114320",
      date: "11/23/24"
    },
    {
      title: "Men's Basketball: Northwestern vs Eastern Illinois Pregame Standup",
      href: "https://x.com/NNNSports/status/1857587132593844234",
      date: "11/15/24"
    }
  ]

  return (
    <main className="television-page">
      <WorkPageHero
        category="Television"
        title="Television"
        description="I'm a reporter, editor and anchor for Northwestern News Network (NNN) News and Sports. I regularly contribute to the SportsNight, Noticiero Northwestern and Northwestern News Report programs. All broadcasts are livestreamed on YouTube. As a sideline reporter, I produce standups in the field and film Northwestern basketball, football and baseball. Here are clips of my work in front of and behind the camera!"
        imageSrc="/television/wrigley_standup.webp"
        imageAlt="Television standup at Wrigley Field"
      />

      <WorkSection title="On-Air">
        <div className="television-grid">
          {studioItems.map((item, index) => (
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

      <WorkSection title="Sideline">
        <MediaGrid
          items={[
            {
              title: 'Welsh-Ryan Arena 2',
              subtitle: 'Basketball coverage',
              src: '/television/welsh-ryan_arena_2.webp',
              alt: 'Welsh-Ryan Arena standup',
              subdued: true,
            },
            {
              title: 'Football sidelines',
              subtitle: 'Pregame & postgame hits',
              src: '/television/football_sidelines.webp',
              alt: 'Football sidelines standup',
              subdued: true,
            
            },
          ]}
        />
      </WorkSection>

      <WorkSection title="">
        <WorkList items={Sideline} />
      </WorkSection>
    </main>
  )
}

export default TelevisionPage
