import { useEffect, useState } from "react";

const useProducts = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://ancient-beach-97933.herokuapp.com/book')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    return [books, setBooks];
}

export default useProducts;