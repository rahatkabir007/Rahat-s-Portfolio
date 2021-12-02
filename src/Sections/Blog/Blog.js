import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h2 className="text-center">Blog Coming Soon</h2>
            <div className="text-center my-5">
                <Link to="/home" style={{ width: '50%', margin: '20px auto 0 auto', textAlign: 'center', textDecoration: "none", backgroundColor: "#b9c7d2", color: "black", padding: "10px 7px", borderRadius: "5px" }}>Return To Home Page</Link>
           </div>
        </div>
    );
};

export default Blog;