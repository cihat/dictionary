/* eslint-disable */
// @ts-nocheck

import cx from '@/lib/cx';
import React, { useState, useEffect, useRef } from 'react';
import Container from '../ui/container';

type YouglishWidgetProps = {
  word: string;
  className: string;
};

function YouglishWidget({ word, className }: YouglishWidgetProps) {
  const isDev = process.env.NODE_ENV === 'development';

  // if(isDev) return <div className={className}>test</div>;

  const widgetRef = useRef(null);
  const [views, setViews] = useState(0);
  const [curTrack, setCurTrack] = useState(0);
  const [totalTracks, setTotalTracks] = useState(0);
  let widget: { fetch: (arg0: any, arg1: string, arg2: string) => void; replay: () => void; next: () => void; }; // Widget instance

  const onYouglishAPIReady = (inputWord: string) => {
    widget = new YG.Widget(widgetRef.current, {
      width: 700,
      height: 700,
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
      onYouglishAPIReady("love");
    }, 500);

  }, []);

  useEffect(() => {
    if (word) {
      onYouglishAPIReady(word);
    }
  }, [word]);

  return (
    <Container className={cx(className, "min-h-[800px]")}>
      <div id="youglish-widget" ref={widgetRef}></div>
    </Container>
  );
}

export default YouglishWidget;
