import './PageTitle.scss';
import Header from '../Header/Header';
function PageTitle({title="title", imageUrl=""}) {
    return (
        <>
            <Header/>
            <section className="pagetitle" style={{backgroundImage: `url(${imageUrl})`}}>
                <h1 className="title">{title}</h1>
            </section>
        </>
    )
}

export default PageTitle;