import Chip from "./chip";

type Link = {
    name: string,
    url: string
};

export default function Showcase({image_src, title, links, technologies}: {image_src: string, title: string, links: Link[], technologies: string[]}) {
    return (
        <div style={{background: 'white', border: '2px solid white', borderRadius: '20px', display: 'flex', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', overflow: 'hidden', width: '450px', maxWidth: '450px'}}>
            <img src={image_src} height="300px"/>
            <div style={{textAlign: 'left', padding: '10px', color: '#181818'}}>
                <p style={{fontWeight: 'bold', fontSize: '1.125rem', lineHeight: '1.75rem'}}>{title}</p>
                {links.map((link, i) => {
                    return (
                        <a href={link.url} key={i} target='_blank'>
                            {link.name}
                            <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 512 512" fill="black" style={{paddingLeft: '4px', paddingRight: '7px'}}>
                                <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                            </svg>
                        </a>
                    )
                })}
                {/* <p>{description}</p> */}
                <div>
                    {technologies.map((technology, i) => {
                        return (
                            <Chip key={i} {...{name: technology}}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}