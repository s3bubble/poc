import * as React from 'react';
import { render } from 'react-dom';
import './popup.css';
import './comments.css';
import { useEffect, useState } from 'react';

const App: React.FC<{}> = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let domain = window.location.href;
    domain = domain
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '');
    chrome.runtime.sendMessage(
      {
        domain: domain,
      },
      function (response) {
        setComments(response);
      }
    );
  }, []);

  return (
    <div>
      <main className="timeline">
        <h1 className="timeline-header">
          <a
            className="text-link"
            target="_blank"
            href="https://github.com/samueleastdev/Useful-Tech-Tutorials/issues/2"
          >
            1 Comment
          </a>
        </h1>
        <>
          {comments.map((comment, index) => (
            <article className="timeline-comment" key={comment.id}>
              <a
                className="avatar"
                href="https://github.com/samueleastdev"
                target="_blank"
              >
                <img
                  alt="@samueleastdev"
                  height="44"
                  width="44"
                  src="https://avatars.githubusercontent.com/u/1894778?v=4?v=3&amp;s=88"
                />
              </a>
              <div className="comment">
                <header className="comment-header">
                  <span className="comment-meta">
                    <a
                      className="text-link"
                      href="https://github.com/samueleastdev"
                      target="_blank"
                    >
                      <strong>{comment.author.login}</strong>
                    </a>
                    <a
                      className="text-link"
                      href="https://github.com/samueleastdev/Useful-Tech-Tutorials/issues/2#issuecomment-1138358719"
                      target="_blank"
                    >
                      {comment.createdAt}
                    </a>
                  </span>
                  <div className="comment-actions">
                    <span className="author-association-badge">Owner</span>
                  </div>
                </header>
                <div
                  className="markdown-body markdown-body-scrollable"
                  dangerouslySetInnerHTML={{ __html: comment.bodyHTML }}
                ></div>
                <div
                  className="comment-footer"
                  reaction-count="2"
                  reaction-url="https://api.github.com/repos/samueleastdev/Useful-Tech-Tutorials/issues/comments/1138358719/reactions"
                ></div>
              </div>
            </article>
          ))}
        </>
      </main>
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
render(<App />, root);
