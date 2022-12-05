import { useEffect, useState } from "react";

const useProducts = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://my-work-11-server.onrender.com/book')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    return [books, setBooks];
}

export default useProducts;