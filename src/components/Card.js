import React, { useEffect, useCallback, useState } from "react"
import './Card.css'
import { useDispatch, useSelector } from "react-redux"
import { ModalItemActions } from "../store/slices/ModalItem-slice"
import { PageActions } from "../store/slices/Page-slice"

function Card({ modalSetter }) {

    const dispatch = useDispatch()
    const [news, setNews] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { country, category } = useSelector(state => state.Filters)
    const page = useSelector(state => state.Page.page)

    const totalPages = news && Math.ceil(news.totalResults / 9)

    const fetchNews = useCallback(async () => {
        try {
            setLoading(true)
            setError(false)
            const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=679e483ed0304601bdcdef5fe0f0a1f7&country=${country}&category=${category}&pageSize=8&page=${page}`)
            setLoading(false)
            if (!response.ok) {
                throw new Error('Some error occured.')
            }
            const fetchedNews = await response.json()
            setNews(fetchedNews)
        } catch (error) {
            setError(true)
        }
    }, [country, category, page])
    useEffect(() => {
        fetchNews()
    }, [fetchNews])

    const newsItemClick = (newsItem) => {
        modalSetter()
        dispatch(ModalItemActions.setModalItem({
            urlToImage: newsItem.urlToImage,
            title: newsItem.title,
            content: newsItem.content
        }))
    }


    return (
        <React.Fragment>
            {loading && <h3 className="loading">Loading...</h3>}
            {!loading && !error && news && news.totalResults === 0 && <h3 className="no-news">No news available.</h3>}
            {!loading && error &&
                <div className="error">
                    <h3 >Some error occured.</h3>
                    <p onClick={fetchNews}>Try again.</p>
                </div>}
            <div className="card-holder">
                {!loading && !error && news && news.totalResults > 0 &&
                    news.articles.map((newsItem) => {
                        return <div className="card-body" onClick={() => newsItemClick(newsItem)} key={Math.random().toString()}>
                            <p className="source">{newsItem.source.name ? newsItem.source.name : 'unknown'}</p>
                            <img src={newsItem.urlToImage} alt=''/>
                            <p className="title">{newsItem.title}</p>
                            <div className="author">
                                <h3>Author:</h3>
                                <p>{newsItem.author ? newsItem.author : 'unknown'} </p>
                            </div>
                            <div className="published-date">
                                <h3>Date:</h3>
                                <p>{newsItem.publishedAt ? newsItem.publishedAt : 'unknown'} </p>
                            </div>
                            <div className="news-link" onClick={e => e.stopPropagation()}>
                                <a href={newsItem.url} target="_blank" rel="noreferrer" >
                                    Read more
                                </a>
                            </div>
                        </div>
                    })}
            </div>
            {!loading && !error && news && news.totalResults > 0 && totalPages > 1 &&
                < div className="footer">
                    {page !== 1 ? <p onClick={() => dispatch(PageActions.setPage(page - 1))}>Previous</p> : <p style={{ 'color': 'gray' }} >Previous</p>}
                    <h3>{page}</h3>
                    {totalPages > page && totalPages > 1 ? <p onClick={() => dispatch(PageActions.setPage(page + 1))}>Next</p> : <p style={{ 'color': 'gray' }}>Next</p>}
                </div>}
        </React.Fragment >
    )
}
export default Card