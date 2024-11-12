declare module 'react-native-parallax-scroll-view' {
    import { Component } from 'react';
    import { ScrollViewProps } from 'react-native';
  
    export interface ParallaxScrollViewProps extends ScrollViewProps {
      backgroundColor?: string;
      contentBackgroundColor?: string;
      parallaxHeaderHeight: number;
      renderBackground?: () => JSX.Element;
      renderContentBackground?: () => JSX.Element;
      renderForeground?: () => JSX.Element;
      renderStickyHeader?: () => JSX.Element;
      stickyHeaderHeight?: number;
      fadeOutForeground?: boolean;
      outputScaleValue?: number;
    }
  
    export default class ParallaxScrollView extends Component<ParallaxScrollViewProps> {}
  }
  