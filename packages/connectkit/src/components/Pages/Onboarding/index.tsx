import React from 'react';
import {
  Graphic,
  LogoGroup,
  Logo,
  FloatWrapper,
  LogoPosition,
  LogoInner,
  LogoGraphic,
  GraphicBackground,
  RotateWrapper,
} from './styles';

import {
  PageContent,
  ModalBody,
  ModalContent,
  ModalH1,
} from '../../Common/Modal/styles';
import Logos from '../../../assets/logos';
import wave from '../../../assets/wave';

import Button from '../../Common/Button';
import useLocales from '../../../hooks/useLocales';
import { routes, useContext } from '../../ConnectKit';
import { ExternalLinkIcon } from '../../../assets/icons';
import { useWallet } from '../../../wallets/useWallets';
import { useConnect } from '../../../hooks/useConnect';

const Introduction: React.FC = () => {
  const context = useContext();
  const locales = useLocales({});
  const { connect } = useConnect();
  const comethWallet = useWallet('comethWalletSDK');

  const ctaUrl =
    context.options?.walletOnboardingUrl ?? locales.onboardingScreen_ctaUrl;
  return (
    <PageContent>
      <Graphic>
        <LogoGroup>
          <Logo>
            <LogoPosition>
              <LogoInner>
                <FloatWrapper>
                  <RotateWrapper>
                    <LogoGraphic>
                      <Logos.Fingerprint background />
                    </LogoGraphic>
                  </RotateWrapper>
                </FloatWrapper>
              </LogoInner>
            </LogoPosition>
          </Logo>
          <Logo>
            <LogoPosition>
              <LogoInner>
                <FloatWrapper>
                  <RotateWrapper>
                    <LogoGraphic>
                      <Logos.FaceId />
                    </LogoGraphic>
                  </RotateWrapper>
                </FloatWrapper>
              </LogoInner>
            </LogoPosition>
          </Logo>
          <Logo>
            <LogoPosition>
              <LogoInner>
                <FloatWrapper>
                  <RotateWrapper>
                    <LogoGraphic>
                      <Logos.Shield />
                    </LogoGraphic>
                  </RotateWrapper>
                </FloatWrapper>
              </LogoInner>
            </LogoPosition>
          </Logo>
        </LogoGroup>
        <GraphicBackground>{wave}</GraphicBackground>
      </Graphic>
      <ModalContent style={{ paddingBottom: 18 }}>
        <ModalH1>{locales.onboardingScreen_h1}</ModalH1>
        <ModalBody>{locales.onboardingScreen_p}</ModalBody>
      </ModalContent>
      <Button
        onClick={() => {
          if (comethWallet?.connector) {
            connect({ connector: comethWallet?.connector });
            context.setRoute(routes.CONNECT);
            context.setConnector({ id: comethWallet?.id! });
          }
        }}
        arrow
      >
        {locales.onboardingScreen_passkeysText}
      </Button>
      <Button
        variant="secondary"
        href={ctaUrl}
        icon={<ExternalLinkIcon />}
        iconPosition="right"
        style={{
          background: 'transparent',
          height: '28px',
        }}
      >
        {locales.onboardingScreen_ctaText}
      </Button>
    </PageContent>
  );
};

export default Introduction;
