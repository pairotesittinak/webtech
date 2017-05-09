

    
        var googletag = googletag || {};
          googletag.cmd = googletag.cmd || [];
          (function() {
            var gads = document.createElement('script');
            gads.async = true;
            gads.type = 'text/javascript';
            var useSSL = 'https:' == document.location.protocol;
            gads.src = (useSSL ? 'https:' : 'http:') +
              '//www.googletagservices.com/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
          })();

            gptAdSlots = {};
            gptMappings = {};

            googletag.cmd.push(function() {
              gptMappings.Leaderboard = googletag.sizeMapping()
                .addSize([0, 0], [])
                .addSize([320, 200], [320, 50]) // Mobile
                .addSize([768, 200], [728, 90]) // Desktop
                .build();
                
              gptAdSlots.leaderboard = googletag.defineSlot('/102233444/AllPage728x90', [728, 90], 'div-gpt-ad-1424808010304-0')
                .defineSizeMapping(gptMappings.Leaderboard)
                .addService(googletag.pubads());  
                
              gptAdSlots.leftSidebarDesktop = googletag.defineSlot('/102233444/AllPage300x250', [300, 250], 'div-gpt-ad-1424807166027-0')
                .addService(googletag.pubads());

              gptAdSlots.leftSidebarMobile = googletag.defineSlot('/102233444/AllPage300x250', [300, 250], 'div-gpt-ad-1424807166027-1')
                .addService(googletag.pubads());

              gptAdSlots.leftSidebarTall = googletag.defineSlot('/102233444/AllPage300x600', [300, 600], 'div-gpt-ad-1426306539352-0')
                .addService(googletag.pubads());

              gptAdSlots.belowForumTopic = googletag.defineSlot('/102233444/Forum-rec', [728, 90], 'div-gpt-ad-1426305270536-0')
                .addService(googletag.pubads());
              
              gptAdSlots.leftSidebarGameDesktop = googletag.defineSlot('/102233444/GameSection300x250', [300, 250], 'div-gpt-ad-1435840271647-0')
                .addService(googletag.pubads());
                
              gptAdSlots.leftSidebarGameMobile = googletag.defineSlot('/102233444/GameSection300x250', [300, 250], 'div-gpt-ad-1435840271647-1')
                .addService(googletag.pubads());

              gptAdSlots.leftSidebarGameTall = googletag.defineSlot('/102233444/GameSection300x600', [300, 600], 'div-gpt-ad-1435842926541-0')
                .addService(googletag.pubads());  

              googletag.pubads().enableSingleRequest();
              googletag.pubads().collapseEmptyDivs();
              googletag.enableServices();
            });
      
  