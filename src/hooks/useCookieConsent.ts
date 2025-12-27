import { useState, useEffect, useCallback } from 'react';

export type CookieConsentStatus = 'pending' | 'accepted' | 'rejected';

const COOKIE_CONSENT_KEY = 'cookie-consent';

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<CookieConsentStatus>('pending');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent === 'accepted' || storedConsent === 'rejected') {
      setConsentStatus(storedConsent);
    }
    setIsLoaded(true);
  }, []);

  const acceptCookies = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setConsentStatus('accepted');
    // Here you can initialize analytics/marketing scripts
    console.log('Cookies accepted - analytics can now be loaded');
  }, []);

  const rejectCookies = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    setConsentStatus('rejected');
    console.log('Cookies rejected - only essential cookies will be used');
  }, []);

  const resetConsent = useCallback(() => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setConsentStatus('pending');
  }, []);

  const showBanner = isLoaded && consentStatus === 'pending';

  return {
    consentStatus,
    showBanner,
    acceptCookies,
    rejectCookies,
    resetConsent,
    isLoaded,
  };
};
