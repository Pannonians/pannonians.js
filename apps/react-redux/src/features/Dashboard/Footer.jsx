import React from 'react'

export default function Footer() {
    return (
        <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:&nbsp;
            <span className="text-warning font-weight-normal">
            Pannonias Learning Team
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external movies data API&nbsp;
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDB
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}
