function initWidget() {
  console.log("Hello widget loaded");

  const container = document.querySelector(".widget-hello");

  if (container) {
    const msg = document.createElement("p");
    msg.textContent = "Widget initialized successfully!";
    container.appendChild(msg);
  }
}

initWidget();

  (async () => {
    const sdk = new window.WidgetServiceSDK();

    const result = await sdk.connectors.execute({
      permalink: "get-category-list",
      method: "GET"
    });

    console.log(result);
  })();


