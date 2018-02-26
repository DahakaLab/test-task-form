export function headerNode() {
    let titleText = document.createElement('title'),
        logoTitle = document.createElement('link'),
        viewPort = document.createElement('meta');

    logoTitle.rel = 'shortcut icon';
    logoTitle.href = 'https://cdn6.aptoide.com/imgs/a/1/a/a1a7ec96543f08b7ca7b19c00ee5929f_icon.png?w=256';
    logoTitle.type = 'image/png';

    titleText.innerHTML = 'Test task Frontend';

    viewPort.name = 'viewport';
    viewPort.content = 'width=device-width, initial-scale=1.0';

    document.head.appendChild(viewPort);
    document.head.appendChild(logoTitle);
    document.head.appendChild(titleText);
}