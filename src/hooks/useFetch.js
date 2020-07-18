import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    FeedService,
    CommentService
} from '_services';

const _services = {
    FeedService: FeedService,
    CommentService: CommentService
};

const useFetch = ({ type, func, param, keys }) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [nextPage, setNextPage] = useState(0);
    const [activePage, setActivePage] = useState(0);


    useEffect(() => {
        const abortController = new AbortController();

        const signal = abortController.signal;

        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await _services[type][func]({ signal, ...param, page: activePage });

                //console.warn(activePage, result );

                if (result.success == true) {
                    const _data = result.data[keys] || [];
                    setData([...data, ..._data]);
                    setIsLoaded(true);
                    setNextPage(result.data['nextPage'] || 0);
                    setHasNextPage(result.data['hasNextPage'] || false);
                } else
                    setIsError(true);

            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();

        return () => {
            abortController.abort();
        };

    }, [activePage]);

    const loadMoreData = () => {
        if (hasNextPage)
            setActivePage(nextPage);
    }

    return [{ data, isLoading, isLoaded, isError }, loadMoreData];
};

useFetch.defaultProps = {
    type: '', // servis tipi
    func: '', // ilgili servis tipinde kullanacağımız fonk.
    param: {}, // ilgili servse gondereceğimiz parametreler
    keys: '', // donen response içerisinde dataya ulaşacağımız keys
};

useFetch.propTypes = {
    type: PropTypes.string,
    func: PropTypes.string,
    param: PropTypes.object,
    keys: PropTypes.string,
};

export { useFetch };