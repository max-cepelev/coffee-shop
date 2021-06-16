import './PageTitle.scss';
function PageTitle({title="title", imageUrl=""}) {
    return (
        <section className="pagetitle" style={{backgroundImage: `url(${imageUrl})`}}>
            <h1 className="title">{title}</h1>
        </section>
    )
}

export default PageTitle;