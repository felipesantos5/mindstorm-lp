import { SectionAnimted } from "../animationsection/animationSection"
import { BannerContent } from "../banner/bannerContent"

export const Sec4 = () => {
  return (
    <section className="bg-backgroundLight pt-36 relative text-white ">
      <SectionAnimted className="flex max-w-7xl gap-20 m-auto xl:px-4 md:flex-col md:items-center">
        <BannerContent title={"Salve tempo"} text={"Don’t waste engineering time manually writing code and building infrastructure to extract and maintain web data. Start relying on Reworkd and automate your extraction today."} icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVG">
            <path id="Vector" d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16C3.5 22.904 9.096 28.5 16 28.5C21.505 28.5 26.178 24.942 27.846 20" stroke="#002237" strokeWidth="2" />
            <path id="Vector_2" d="M16 8V16L20 20" stroke="#002237" strokeWidth="2" />
            <path id="Vector_3" d="M21.5 8C26 8 26 1.5 26 1.5C26 1.5 26 8 30.5 8C26 8 26 14.5 26 14.5C26 14.5 26 8 21.5 8Z" fill="#002237" stroke="#002237" strokeWidth="2" strokeLinejoin="round" />
          </g>
        </svg>
        } />
        <BannerContent title={"Salve o faturamento"} text={"Data scraping specialists and in-house engineering teams don’t come cheap. So keep your business costs down and get Reworkd up and running."} icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVG">
            <path id="Vector" d="M16.5 11.5C16.5 9.9087 15.8679 8.38258 14.7426 7.25736C13.6174 6.13214 12.0913 5.5 10.5 5.5H10M10 5.5H8.632C7.27091 5.5 5.96556 6.04069 5.00313 7.00313C4.52658 7.47968 4.14856 8.04543 3.89065 8.66807C3.63274 9.29071 3.5 9.95806 3.5 10.632C3.49993 11.5816 3.80093 12.5068 4.35973 13.2745C4.91853 14.0423 5.70637 14.6131 6.61 14.905L13.39 17.095C14.2936 17.3869 15.0815 17.9577 15.6403 18.7255C16.1991 19.4932 16.5001 20.4184 16.5 21.368C16.5 22.7291 15.9593 24.0344 14.9969 24.9969C14.0344 25.9593 12.7291 26.5 11.368 26.5H9.5C7.9087 26.5 6.38258 25.8679 5.25736 24.7426C4.13214 23.6174 3.5 22.0913 3.5 20.5M10 5.5V3.5M10 5.5V28.5" stroke="#002237" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
            <path id="Vector_2" d="M26 10.5L23.5 13H28.5L26 10.5Z" stroke="#002237" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
          </g>
        </svg>

        } />
        <BannerContent title={"Economize complicações"} text={"Avoid worrying about proxies, headless browsers, data consistency, silent failures, etc. Reworkd deals in web data without the difficulty."} icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVG">
            <path id="Vector" d="M12 17L15 20L20 12" stroke="#002237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path id="Vector_2" d="M21 4H11C7.13401 4 4 7.13401 4 11V21C4 24.866 7.13401 28 11 28H21C24.866 28 28 24.866 28 21V11C28 7.13401 24.866 4 21 4Z" stroke="#002237" strokeWidth="2" />
          </g>
        </svg>

        } />
      </SectionAnimted>
    </section>
  )
}