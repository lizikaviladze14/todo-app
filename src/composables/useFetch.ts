import { useState } from 'react';
export const useFetch = <T>(fetchCall: any) => {
    const [response, setResponse] = useState<T>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function call() {
        try {
            const res = await fetchCall();
            const json = await res.json();
            setResponse(json);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { response, error, loading, call };
};
