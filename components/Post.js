import Link from 'next/link';
import Image from 'next/image';

import React,{ useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import { getDate } from '../utils/utils';

export default function Post({ post, featuredMedia }) {
  //console.log(featuredMedia);
  const [keyValue, setKeyValue] = useState(1);
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
    
        <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
        <iframe title="My Daily Marathon Tracker" 
          src='https://www.youtube.com/embed/8UVNT4wvIGY?list=RDCKti7QixnJI'
          key={keyValue}
        >
        </iframe>

        <div className="col-md-4">
          <Link href={`/posts/${post.slug}`}>
            <a>
              <Image
                src="https://ziel.com.co/wp-content/uploads/2022/06/buril.jpg"/*{featuredMedia['media_details'].sizes.medium['source_url']}*/
                width={180}
                height={120}
                alt="img"/*{featuredMedia['alt_text']}*/
              />
            </a>
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.title.rendered}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
            <p className="card-text">
              <small className="text-muted">On {getDate(post.modified)}</small>
            </p>
            <Link href={`/posts/${post.slug}`}>
              <a className="btn btn-primary">See more</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}