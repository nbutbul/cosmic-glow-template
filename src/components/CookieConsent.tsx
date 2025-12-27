import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const CookieConsent = () => {
  const { showBanner, acceptCookies, rejectCookies } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6"
          dir="auto"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl p-4 md:p-6 shadow-lg neon-border">
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Cookie className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">
                      אנחנו משתמשים בעוגיות
                    </h3>
                  </div>
                  <button
                    onClick={rejectCookies}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    aria-label="סגור"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  אנחנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלך, לספק תוכן מותאם אישית ולנתח את התנועה באתר. 
                  באפשרותך לבחור אילו עוגיות לאשר.
                </p>

                {/* Details (collapsible) */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-secondary/50 rounded-lg p-4 space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <div className="w-3 h-3 rounded-full bg-green-500 mt-1 shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">עוגיות הכרחיות</span>
                            <p className="text-muted-foreground">
                              נדרשות לתפקוד בסיסי של האתר. לא ניתן לכבות אותן.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-3 h-3 rounded-full bg-primary mt-1 shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">עוגיות אנליטיות</span>
                            <p className="text-muted-foreground">
                              עוזרות לנו להבין כיצד מבקרים משתמשים באתר.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-3 h-3 rounded-full bg-primary mt-1 shrink-0" />
                          <div>
                            <span className="font-medium text-foreground">עוגיות שיווקיות</span>
                            <p className="text-muted-foreground">
                              משמשות להצגת פרסומות רלוונטיות.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors underline-hover"
                  >
                    <Settings className="w-4 h-4" />
                    <span>{showDetails ? 'הסתר פרטים' : 'הגדרות עוגיות'}</span>
                  </button>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      variant="outline"
                      onClick={rejectCookies}
                      className="order-2 sm:order-1"
                    >
                      דחה הכל
                    </Button>
                    <Button
                      variant="neon"
                      onClick={acceptCookies}
                      className="order-1 sm:order-2"
                    >
                      קבל הכל
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
