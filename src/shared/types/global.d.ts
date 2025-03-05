declare global {
  interface Window {
    webkit?: {
      messageHandlers: {
        serverEvent: {
          postMessage: (message: string) => void;
        };
      };
    };
  }
}

export {};
