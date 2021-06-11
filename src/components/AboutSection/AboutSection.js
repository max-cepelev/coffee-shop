import './AboutSection.scss';
import BlackLine from '../BlackLine/BlackLine';
function AboutSection({title="", imageUrl="", content=""}) {
    return (
        <section className='about'>
            <img src={imageUrl} alt={title} className="about__img"/>
            <div className="about__text">
                <h2 className="subtitle">{title}</h2>
                <BlackLine/>
                <p className="text" dangerouslySetInnerHTML={{__html: content}}></p>
            </div>
            <div className="about__line"></div>
        </section>
    )
}

export default AboutSection;