/* eslint-disable */
// @ts-nocheck

import cx from '@/lib/cx';
import React, { useState, useEffect, useRef } from 'react';
import Container from '../ui/container';
import { randomAlphabet } from '@/lib/utils';

type YouglishWidgetProps = {
  word: string;
  className: string;
  firstLetter: string;
};

function YouglishWidget({ word, className, firstLetter }: YouglishWidgetProps) {
  const isDev = process.env.NODE_ENV === 'development';

  if(isDev) return <div className={className}>Developing</div>;

  const widgetRef = useRef(null);
  const [views, setViews] = useState(0);
  const [curTrack, setCurTrack] = useState(0);
  const [totalTracks, setTotalTracks] = useState(0);
  let widget: { fetch: (arg0: any, arg1: string, arg2: string) => void; replay: () => void; next: () => void; }; // Widget instance

  const onYouglishAPIReady = (inputWord: string) => {
    widget = new YG.Widget(widgetRef.current, {
      width: 950,
      height: 950,
      components: 9,
      autoplay: true,
      autoReplay: true,
      autoNext: false,
      events: {
        onFetchDone,
        onVideoChange,
        onCaptionConsumed,
        nextVideo: () => {
          setViews(views + 1);
        },
        prevVideo: () => {
          setViews(views - 1);
        }
      },
    });

    widget.fetch(inputWord, 'english', 'us');
  };

  const onFetchDone = (event: { totalResult: React.SetStateAction<number>; }) => {
    if (event.totalResult === 0) {
      alert('No result found');
    } else {
      setTotalTracks(event.totalResult);
    }
  };

  const onVideoChange = (event: { trackNumber: React.SetStateAction<number>; }) => {
    setCurTrack(event.trackNumber);
    setViews(0);
  };

  const onCaptionConsumed = () => {
    if (views == 0) {
      widget.replay();
      setViews(views + 1);
    } else if (curTrack < totalTracks) {
      widget.next();
    } else {
      alert('All tracks have been played.');
    }
  };

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://youglish.com/public/emb/widget.js';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    // @ts-ignore
    firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);

    setTimeout(() => {
      onYouglishAPIReady(firstLetter);
    }, 500);

  }, []);

  useEffect(() => {
    if (word) {
      onYouglishAPIReady(word);
    }
  }, [word]);

  return (
    <div id="youglish-widget" ref={widgetRef}></div>
  );
}

export default YouglishWidget;
