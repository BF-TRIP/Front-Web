import { style } from '@vanilla-extract/css';
import { themeVars } from '@shared/styles';

export const header = style({
  backgroundColor: themeVars.color.yellow_main,
  height: '20.2rem',
});

export const logo = style({
  width: '11.3rem',
  marginLeft: '1.515rem',
  marginTop: '1.6rem',
});

export const voiceSearchContainer = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
});

export const voiceBg = style({
  position: 'absolute',
});

export const voiceButton = style({
  position: 'relative',
  zIndex: 2,
  top: '1rem',
  width: '14rem',
  cursor: 'pointer',
});

export const voiceBubble = style({
  position: 'absolute',
  top: 'calc(50% - 10rem)',
  left: '62.5%',
  transform: 'translateX(-50%)',
  zIndex: 3,
  width: '18rem',
});

export const settingIcon = style({
  position: "absolute",
  top: "1.6rem",
  right: "1.6rem",
  width: "2.4rem",
  height: "2.4rem",
  cursor: "pointer",
});
