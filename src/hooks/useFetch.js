import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FeedService } from '_services';

const _services = {
    FeedService: FeedService
};

const useFetch = ({ type, func, param, keys }) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        const signal = abortController.signal;
        
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await _services[type][func]({ signal, ...param });

                if (result.success == true) {
                    const _data = result.data[keys] || [];
                    setData(_data);
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

    }, []);

    return [{ data, isLoading, isError }];
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