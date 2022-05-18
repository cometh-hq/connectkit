import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  max-width: 100%;
  width: 334px;
`;

export const LearnMoreContainer = styled(motion.div)`
  margin: 0 0 -4px; // offset for button being tall
  text-align: center;
`;
export const LearnMoreButton = styled(motion.button)`
  appearance: none;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 42px;
  padding: 0;
  background: none;
  color: var(--body-color-muted);
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  will-change: transform;
  transition: color 200ms ease, transform 100ms ease;
  svg {
    display: block;
    position: relative;
    top: 2.5px;
    path,
    circle {
      transition: all 100ms ease-out;
    }
    path:last-of-type {
      transform-origin: 0 0;
      transform: scaleX(1.3) skewY(-12deg);
      opacity: 0;
    }
    circle {
      transform: translate(20%, -15%);
    }
  }
  &:hover {
    color: var(--body-color-muted-hover);
    svg {
      path,
      circle {
        opacity: 1;
        transform: none;
      }
    }
  }
  &:active {
    transform: scale(0.96);
  }
`;

export const ConnectorsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 0 16px;
`;

export const ConnectorButton = styled(motion.button)`
  --background: var(--body-background-secondary);
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 64px;
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 18px;
  color: var(--body-color);
  text-align: center;
  transition: background-color 200ms ease, box-shadow 280ms ease,
    transform 100ms ease;

  background: var(--background);
  box-shadow: inset 0 0 0 0px var(--background),
    inset 0 0 0 0px var(--background);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:not(:disabled) {
    &:hover {
      box-shadow: inset 0 0 0 3px var(--body-background-secondary-hover-outline),
        inset 0 0 0 6px var(--body-background);
      //--background: var(--body-background-secondary-hover);
    }
    &:focus {
      transition-duration: 100ms;
      box-shadow: inset 0 0 0 0px var(--background),
        inset 0 0 0 0px var(--background);
    }
    &:active {
      transform: scale(0.99);
      box-shadow: inset 0 0 0 3px var(--body-background-secondary-hover-outline),
        inset 0 0 0 6px var(--body-background);
    }
  }
`;

export const ConnectorLabel = styled(motion.span)`
  width: 100%;
  padding: 0 64px;
`;

export const ConnectorIcon = styled(motion.div)`
  position: absolute;
  left: 16px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 8px;
`;