
const Blogs = () => {
    return (
        <div className="text-justify p-10">
            <h3>1. What is an access token and refresh token?</h3>
            <p>An access token and a refresh token are two concepts often used in authentication and authorization mechanisms, especially in the context of web applications and APIs. They are used to provide secure access to resources on behalf of a user or an application without requiring the user to repeatedly enter their credentials (e.g., username and password).</p>
            <h3>2. How do they work and where should we store them on the client-side?</h3>
            <p>When a user authenticates, the authentication server verifies their credentials and, if successful, issues an access token. The access token is then sent with each API request as an authorization token. The server hosting the API validates the access token to ensure the users identity, the scope of access, and expiration time before granting access to the requested resource. Access tokens are short-lived and typically expire after a short period (e.g., 15 minutes to an hour), adding a layer of security. <br />When the access token expires, the client-side application can use the refresh token to request a new access token from the authentication server. The refresh token is sent to the server, and if it is valid and has not expired, the server responds with a new access token (and sometimes a new refresh token). This process is known as token refresh and allows the user to maintain their authenticated session without needing to log in again.</p>
            <h3>2_1. Compare SQL and NoSQL databases?</h3>
            <p>SQL Databases:</p>
            <ol className="list-decimal p-4">
                <li>Relational data model with fixed schemas.</li>
                <li>Standardized SQL language for querying.</li>
                <li>ACID compliant for strong consistency.</li>
                <li>Well-suited for structured data and complex relationships.</li>
            </ol>
            <p>NoSQL Databases:</p>
            <ol className="list-decimal p-4">
                <li>Various data models (key-value, document, column-family, graph).</li>
                <li>May have dynamic or schemaless schemas.</li>
                <li>Custom query languages, sometimes supporting SQL-like querying.</li>
                <li>BASE properties prioritize availability and partition tolerance.</li>
            </ol>
            <h3>3. What is express js? What is Nest JS?</h3>
            <p>Express.js: <small>Express.js, commonly referred to as Express, is a minimalist and lightweight web framework for Node.js. It provides a set of essential features for building web applications and APIs, such as routing, middleware support, and HTTP utilities. Express.js is known for its simplicity, flexibility, and a large number of third-party middleware and extensions available, making it highly customizable.</small></p>
            <p>Nest.js: <small>Nest.js is a full-featured, opinionated web framework and platform for building scalable and maintainable server-side applications. It is built on top of Express.js but extends it with additional features inspired by Angular, making it a powerful and structured solution for building complex applications. Nest.js promotes the use of TypeScript, decorators, dependency injection, and modular architecture.</small></p>
            <h3>4. What is MongoDB aggregate and how does it work?</h3>
            <p>MongoDB aggregate is a framework for data processing and analysis in MongoDB. It uses a sequence of stages to filter, group, and transform data in the database. Each stage performs a specific operation on the data and passes the results to the next stage in the pipeline.</p>
        </div>
    );
};

export default Blogs;