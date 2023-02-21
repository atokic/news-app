import { useState, useRef, useCallback, useEffect } from 'react';

function useInfiniteScroll(newsRootRef) {
    const [page, setPage] = useState(0);
    const loadMoreRef = useRef(null);

    const handleObserver = useCallback((entries) => {
        const [target] = entries;
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: newsRootRef ? newsRootRef.current : null,
            rootMargin: '100px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(handleObserver, option);

        if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    }, [handleObserver]);

    return { loadMoreRef, page };
}

export default useInfiniteScroll;