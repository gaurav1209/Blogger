import React from "react";
import { Link } from "react-router-dom";

import BlogList from "../Blogs/BlogList/BlogList";

const Dashboard = () => {
    return (
        <div>
            <BlogList />
            <div className="fixed-action-btn">
                <Link to="/blogs/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
