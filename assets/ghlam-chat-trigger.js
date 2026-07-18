// document.addEventListener('DOMContentLoaded', () => {
//   const chatTriggers = document.querySelectorAll(
//     'a[href="#open-shopify-chat"], [data-open-shopify-chat]'
//   );

//   if (!chatTriggers.length) return;

//   const openShopifyChat = () => {
//     /*
//       Shopify Inbox commonly renders inside an iframe.
//       First try clicking the visible launcher button.
//     */
//     const possibleLaunchers = [
//       '#ShopifyChat button',
//       '#ShopifyChat',
//       '[data-testid="chat-toggle"]',
//       '[aria-label*="chat" i]',
//       '[aria-label*="message" i]'
//     ];

//     for (const selector of possibleLaunchers) {
//       const launcher = document.querySelector(selector);

//       if (launcher) {
//         launcher.click();
//         return true;
//       }
//     }

//     /*
//       Some Shopify Inbox versions expose a global API.
//     */
//     if (
//       window.ShopifyChat &&
//       typeof window.ShopifyChat.open === 'function'
//     ) {
//       window.ShopifyChat.open();
//       return true;
//     }

//     return false;
//   };

//   chatTriggers.forEach((trigger) => {
//     trigger.addEventListener('click', (event) => {
//       event.preventDefault();

//       if (openShopifyChat()) return;

//       /*
//         The app may load after the page.
//         Retry briefly until the launcher becomes available.
//       */
//       let attempts = 0;

//       const retry = window.setInterval(() => {
//         attempts += 1;

//         if (openShopifyChat() || attempts >= 15) {
//           window.clearInterval(retry);
//         }
//       }, 300);
//     });
//   });
// });


(() => {
  const CHAT_LINK_SELECTOR =
    'a[href="#open-shopify-chat"], [data-open-shopify-chat]';

  function findElementInShadowRoots(root, selectors) {
    for (const selector of selectors) {
      const element = root.querySelector?.(selector);

      if (element) {
        return element;
      }
    }

    const allElements = root.querySelectorAll?.('*') || [];

    for (const element of allElements) {
      if (!element.shadowRoot) continue;

      const foundElement = findElementInShadowRoots(
        element.shadowRoot,
        selectors
      );

      if (foundElement) {
        return foundElement;
      }
    }

    return null;
  }

  function openShopifyChat() {
    const selectors = [
      '#ShopifyChat button',
      '#ShopifyChat',
      'button[aria-label*="chat" i]',
      'button[aria-label*="message" i]',
      '[role="button"][aria-label*="chat" i]',
      '[data-testid*="chat" i]',
      '[data-testid*="launcher" i]'
    ];

    const chatButton = findElementInShadowRoots(document, selectors);

    if (chatButton) {
      chatButton.click();
      return true;
    }

    if (
      window.ShopifyChat &&
      typeof window.ShopifyChat.open === 'function'
    ) {
      window.ShopifyChat.open();
      return true;
    }

    return false;
  }

  function handleChatClick(event) {
    const trigger = event.target.closest(CHAT_LINK_SELECTOR);

    if (!trigger) return;

    event.preventDefault();

    if (openShopifyChat()) return;

    let attempts = 0;
    const maxAttempts = 30;

    const retryInterval = window.setInterval(() => {
      attempts += 1;

      if (openShopifyChat() || attempts >= maxAttempts) {
        window.clearInterval(retryInterval);
      }
    }, 250);
  }

  document.addEventListener('click', handleChatClick);
})();