export default {
    routes: [
      {
        method: "GET",
        path: "/metabase-iframe",
        handler: "metabase.generateIframeUrl",
      },
    ],
  };