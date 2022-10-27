import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            <Card bg='primary mb-4'>
                <Card.Body className='text-white'>
                    <Card.Title>Q: What is Cors?</Card.Title>
                    <Card.Text>
                        This module supports validating the origin dynamically using a function provided to the origin option. This function will be passed a string that is the origin (or undefined if the request has no origin), and a callback with the signature callback(error, origin).

                        The origin argument to the callback can be any value allowed for the origin option of the middleware, except a function. See the configuration options section for more information on all the possible value types.

                        This function is designed to allow the dynamic loading of allowed origin(s) from a backing datasource, like a database.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card bg='primary mb-4'>
                <Card.Body className='text-white'>
                    <Card.Title>Q: Why are we using firebase? What other options do we have to implement authentication?</Card.Title>
                    <Card.Text>
                        Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                        You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.

                        As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.

                        Authentication is used by a server when the server needs to know exactly who is accessing their information or site.
                        Authentication is used by a client when the client needs to know that the server is system it claims to be.
                        In authentication, the user or computer has to prove its identity to the server or client.
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                        Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to.
                        Authentication does not determine what tasks the individual can do or what files the individual can see. Authentication merely identifies and verifies who the person or system is.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card bg='primary mb-4'>
                <Card.Body className='text-white'>
                    <Card.Title>Q: How does private route work?
                    </Card.Title>
                    <Card.Text>
                        We will start off by simulating a user login/logout mechanism. By using two buttons conditionally rendered, we either render a login or logout button based on the authentication status of the user. Based on the event handler, we either set a user or reset it to null by using React's useState Hook:
                        The user will serve us either as logged in or logged out user. Next we are going to protect our first route. Therefore, we will start by implementing a redirect with React Router in the Home component where we already passed the user as prop to the component:
                        When there is a logged in user, the Home component does not run into the if-else condition's block and renders the actual content of the Home component instead. However, if there is no logged in user, the Home component renders React Router's Navigate component and therefore redirects a user to the Landing page. In the case of a user being on the Home page and logging out by clicking the button, the user will experience a redirect from the protected page.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card bg='primary mb-4'>
                <Card.Body className='text-white'>
                    <Card.Title>Q:What is Node? How does Node work?</Card.Title>
                    <Card.Text>
                        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;