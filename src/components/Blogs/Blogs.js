import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2>1:- Difference between javascript and nodejs</h2>
                <br />
                <p><small>JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine. As a result, it's used to build network-centric applications. It is a distributed system that is used for data-intensive real-time applications.</small></p>
            </div>
            <br />
            <div>
                <h2>2:- When should you use nodejs and when should you use mongodb</h2>
                <br />
                <p><small>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. <br />
                    <br /> SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</small></p>
            </div>
            <br />
            <div>
                <h2>3:- Differences between sql and nosql databases.</h2>
                <br />
                <p><small>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</small></p>
            </div>
            <br />
            <div>
                <h2>4:- What is the purpose of jwt and how does it work</h2>
                <br />
                <p><small>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</small></p>
            </div>
        </div>
    );
};

export default Blogs;