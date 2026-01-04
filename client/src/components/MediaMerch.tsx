import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Play, X, Headphones } from 'lucide-react';

interface MediaItem {
  headline: string;
  source: string;
  date: string;
  summary: string;
  url: string;
  cta: string;
  isVideo?: boolean;
  isAudio?: boolean;
  youtubeId?: string;
}

const unapologeticVoice: MediaItem[] = [
  {
    headline: 'Two years of inaction have normalized hate crimes in Toronto',
    source: 'National Post',
    date: 'Dec 26, 2025',
    summary: 'A critique of the lack of law enforcement response to the "Mezuzah thefts" and rising antisemitism.',
    url: 'https://nationalpost.com/opinion/matthew-taub-two-years-of-inaction-have-normalized-hate-crimes-in-toronto',
    cta: 'Read Article',
  },
  {
    headline: 'Mob that attacked Jewish students must be held accountable',
    source: 'National Post',
    date: 'Nov 11, 2025',
    summary: 'The "Attempted Pogrom" op-ed demanding accountability for the violence at TMU and criticizing Mayor Chow\'s silence.',
    url: 'https://nationalpost.com/opinion/mob-that-attacked-jewish-students-must-be-held-accountable',
    cta: 'Read Article',
  },
];

const inTheNews: MediaItem[] = [
  {
    headline: 'Founder of "Unapologetically Jewish" holds news conference',
    source: 'CPAC / YouTube',
    date: 'Oct 6, 2025',
    summary: 'Full footage of the Ottawa press conference announcing the Human Rights Tribunal filings.',
    url: 'https://www.youtube.com/watch?v=BujNAll5hnc',
    cta: 'Watch Clip',
    isVideo: true,
    youtubeId: 'BujNAll5hnc',
  },
  {
    headline: 'Unapologetically Jewish Sues City Of Toronto And Police',
    source: 'TheJ.ca',
    date: 'Nov 4, 2025',
    summary: 'Detailed breakdown of the lawsuit alleging a "failure to protect" Jewish citizens and "two-tier policing."',
    url: 'https://thej.ca/2025/11/04/unapologetically-jewish-sues-city-of-toronto-and-police-over-alleged-failure-to-protect-jews/',
    cta: 'Read Article',
  },
  {
    headline: 'Suspected hate-motivated investigation: Jewish prayer scrolls stolen',
    source: 'CTV News',
    date: 'Dec 8, 2025',
    summary: 'Reporting on the North York Mezuzah thefts, featuring Taub\'s defense of the targeted Jewish seniors.',
    url: 'https://www.ctvnews.ca/toronto/local/article/suspected-hate-motivated-investigation-underway-after-about-20-jewish-prayer-scrolls-stolen-from-homes-in-north-york-toronto-police/',
    cta: 'Read Article',
  },
  {
    headline: 'Unapologetically Jewish Files Human Rights Complaints',
    source: 'Financial Post',
    date: 'Oct 7, 2025',
    summary: 'National coverage confirming the organization\'s shift from "advocacy to formal legal pressure."',
    url: 'https://financialpost.com/pmn/business-wire-news-releases-pmn/unapologetically-jewish-org-files-human-rights-complaints-against-cities-of-montreal-and-toronto',
    cta: 'Read Article',
  },
  {
    headline: 'TIFF screening of Oct. 7 documentary brings protests',
    source: 'CBC News',
    date: 'Sept 10, 2025',
    summary: 'Taub provides the counter-narrative from inside Roy Thomson Hall during The Road Between Us premiere.',
    url: 'https://www.cbc.ca/news/entertainment/tiff-screening-of-oct-7-documentary-brings-protests-and-a-standing-ovation-for-its-director-1.7630307',
    cta: 'Read Article',
  },
];

const broadcastAudio: MediaItem[] = [
  {
    headline: 'People shouldn\'t become victims because Police want to de-escalate',
    source: 'Newstalk 1010',
    date: 'Oct 7, 2025',
    summary: 'Radio interview arguing that "de-escalation" policies are effectively victimizing the Jewish community.',
    url: 'https://omny.fm/shows/newstalk1010/people-shouldnt-become-victims-because-police-want-to-de-escalate-matthew-taub-with-unapologetically-jewish-tells-mooreintheam-how-the-grassroots-organization-is-suing-the-city-and-police-in-toronto-and-montreal-for-failing-to-protect-jewish-canadians',
    cta: 'Listen Now',
    isAudio: true,
  },
];


function MediaCard({ item, index, onVideoClick }: { item: MediaItem; index: number; onVideoClick?: (youtubeId: string) => void }) {
  const handleClick = () => {
    if (item.isVideo && item.youtubeId && onVideoClick) {
      onVideoClick(item.youtubeId);
    } else {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="bg-gray-100 p-5 sm:p-6 border-l-4 border-red-600 flex flex-col h-full hover:bg-gray-200 transition-colors"
      data-testid={`card-media-${index}`}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{item.source}</span>
        <span className="text-xs font-mono text-gray-500">{item.date}</span>
      </div>
      <h4 className="text-lg sm:text-xl font-black mb-3 leading-tight">{item.headline}</h4>
      <p className="text-sm font-mono text-gray-600 mb-4 flex-grow line-clamp-3">{item.summary}</p>
      <button 
        onClick={handleClick}
        className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-bold text-sm uppercase tracking-wider hover:bg-red-600 transition-colors self-start"
        data-testid={`button-media-${index}`}
      >
        {item.isVideo && <Play size={14} />}
        {item.isAudio && <Headphones size={14} />}
        {!item.isVideo && !item.isAudio && <ExternalLink size={14} />}
        {item.cta}
      </button>
    </div>
  );
}

function VideoModal({ youtubeId, onClose }: { youtubeId: string; onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="modal-video"
    >
      <div 
        className="relative w-full max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
          data-testid="button-close-video"
          aria-label="Close video"
        >
          <X size={32} />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
        />
      </div>
    </div>
  );
}

export default function MediaMerch() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const shopifyInitialized = useRef(false);

  useEffect(() => {
    if (shopifyInitialized.current) {
      return;
    }

    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    function ShopifyBuyInit() {
      const node = document.getElementById('collection-component-1767484934888');
      if (!node) {
        return;
      }
      
      if (node.hasChildNodes()) {
        shopifyInitialized.current = true;
        return;
      }

      const client = (window as any).ShopifyBuy.buildClient({
        domain: 'aa87d1-ac.myshopify.com',
        storefrontAccessToken: '121ee174ed0bc82f47a2b669ca6f6a5f',
      });
      
      (window as any).ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        ui.createComponent('collection', {
          id: '286621204574',
          node: node,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(50% - 40px)",
                    "margin-left": "40px",
                    "margin-bottom": "50px",
                    "width": "calc(50% - 40px)"
                  },
                  "img": {
                    "height": "calc(100% - 15px)",
                    "position": "absolute",
                    "left": "0",
                    "right": "0",
                    "top": "0"
                  },
                  "imgWrapper": {
                    "padding-top": "calc(75% + 15px)",
                    "position": "relative",
                    "height": "0"
                  }
                },
                "title": {
                  "font-size": "20px",
                  "color": "#000000"
                },
                "button": {
                  "font-weight": "bold",
                  "font-size": "14px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                  ":hover": {
                    "background-color": "#c62222"
                  },
                  "background-color": "#dc2626",
                  ":focus": {
                    "background-color": "#c62222"
                  },
                  "border-radius": "0px",
                  "padding-left": "100px",
                  "padding-right": "100px"
                },
                "quantityInput": {
                  "font-size": "14px",
                  "padding-top": "15px",
                  "padding-bottom": "15px"
                },
                "price": {
                  "font-size": "16px",
                  "color": "#000000"
                },
                "compareAt": {
                  "font-size": "13.6px",
                  "color": "#000000"
                },
                "unitPrice": {
                  "font-size": "13.6px",
                  "color": "#000000"
                }
              },
              "buttonDestination": "checkout",
              "text": {
                "button": "Buy now"
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-40px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-weight": "bold",
                  "font-size": "14px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                  ":hover": {
                    "background-color": "#c62222"
                  },
                  "background-color": "#dc2626",
                  ":focus": {
                    "background-color": "#c62222"
                  },
                  "border-radius": "0px",
                  "padding-left": "100px",
                  "padding-right": "100px"
                },
                "quantityInput": {
                  "font-size": "14px",
                  "padding-top": "15px",
                  "padding-bottom": "15px"
                },
                "title": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "bold",
                  "font-size": "26px",
                  "color": "#4c4c4c"
                },
                "price": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  "color": "#4c4c4c"
                },
                "compareAt": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  "color": "#4c4c4c"
                },
                "unitPrice": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  "color": "#4c4c4c"
                }
              },
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-weight": "bold",
                  "font-size": "14px",
                  "padding-top": "15px",
                  "padding-bottom": "15px",
                  ":hover": {
                    "background-color": "#c62222"
                  },
                  "background-color": "#dc2626",
                  ":focus": {
                    "background-color": "#c62222"
                  },
                  "border-radius": "0px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              }
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-weight": "bold",
                  "background-color": "#dc2626",
                  ":hover": {
                    "background-color": "#c62222"
                  },
                  ":focus": {
                    "background-color": "#c62222"
                  }
                },
                "count": {
                  "font-size": "14px"
                }
              }
            }
          },
        });
        shopifyInitialized.current = true;
      });
    }

    if ((window as any).ShopifyBuy) {
      if ((window as any).ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      const existingScript = document.querySelector(`script[src="${scriptURL}"]`);
      if (existingScript) {
        ShopifyBuyInit();
        return;
      }
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
  }, []);

  return (
    <section id="media" className="bg-white" data-testid="section-media">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 
          className="text-4xl sm:text-5xl md:text-7xl font-black leading-none mb-4 text-center"
          data-testid="text-media-heading"
        >
          MAKING HEADLINES.<br/>
          <span className="text-red-600">CHANGING MINDS.</span>
        </h2>
        <p className="text-center font-mono text-gray-600 mb-16 max-w-2xl mx-auto">
          From national op-eds to breaking news coverage, we're shaping the narrative and holding power accountable.
        </p>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 border-b-4 border-black pb-4 uppercase tracking-tight">
            The Unapologetic Voice
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unapologeticVoice.map((item, index) => (
              <MediaCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 border-b-4 border-black pb-4 uppercase tracking-tight">
            In The News
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inTheNews.map((item, index) => (
              <MediaCard 
                key={index} 
                item={item} 
                index={index + unapologeticVoice.length} 
                onVideoClick={setActiveVideo}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 border-b-4 border-black pb-4 uppercase tracking-tight">
            Broadcast & Audio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {broadcastAudio.map((item, index) => (
              <MediaCard 
                key={index} 
                item={item} 
                index={index + unapologeticVoice.length + inTheNews.length} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-4 font-mono text-center uppercase tracking-[0.15em] sm:tracking-[0.2em] border-y border-white text-sm sm:text-base">
        /// Every purchase funds the fight ///
      </div>

      <section 
        id="merch" 
        className="relative py-16 sm:py-24 bg-gray-100"
        data-testid="section-merch"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 uppercase"
            data-testid="text-merch-heading"
          >
            Armor for the Unapologetic
          </h2>
          <p className="text-base sm:text-xl font-mono mb-12 max-w-2xl mx-auto">
            Every logo worn is a declaration: We're here. We're proud. We're not going anywhere.
          </p>
          
          <div id="collection-component-1767484934888" data-testid="shopify-collection"></div>
        </div>
      </section>

      {activeVideo && (
        <VideoModal youtubeId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
