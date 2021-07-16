import React from 'react';

export default function Homepage() {
  return (
  <>
    <div className={'container'}>
      <h1>Ian Cook</h1>
    </div>

    <div className={'card_container'}>
      <a href='/about'>
        <div className={'card'}>
          <div className={'card_header'}>
            <h1>About Me</h1>
          </div>
          <div className={'card_body'}>
            <p>Coming soon...</p>
          </div>
        </div>
      </a>

      <a href='/articles'>
        <div className={'card'}>
          <div className={'card_header'}>
            <h1>Sports Articles</h1>
          </div>
          <div className={'card_body'}>
            <p>Coming soon...</p>
          </div>
        </div>
      </a>

      <a href='/faith'>
        <div className={'card'}>
          <div className={'card_header'}>
            <h1>Faith</h1>
          </div>
          <div className={'card_body'}>
            <p>Coming soon...</p>
          </div>
        </div>
      </a>

      <a href='/contact'>
      <div className={'card'}>
        <div className={'card_header'}>
          <h1>Contact Info</h1>
        </div>
        <div className={'card_body'}>
          <p>Coming soon...</p>
        </div>
      </div>
      </a>

    </div>

  </>
  );
}
