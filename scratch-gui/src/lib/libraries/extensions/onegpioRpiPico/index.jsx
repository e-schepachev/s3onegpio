import onegpioRpiPicoImage from './onegpioRpiPico.png';
import onegpioRpiPicoInsetIconURL from './onegpioRpiPico-small.png';

const entry = {
        name: 'OneGpio Raspberry Pi Pico',
        extensionId: 'onegpioRpiPico',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioRpiPicoImage,
        insetIconURL: onegpioRpiPicoInsetIconURL,
        description: 'onegpioRpiPico',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    };

export {entry}; // loadable-extension needs this line.
export default entry;